import React ,{Component,useEffect,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Platform,
  Clipboard,
} from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import {Context as AuthContext} from '../context/AuthContext';
import CheckBox from 'react-native-check-box';

import AcVsPlScreen from '../component/AcVsPlScreen';
import MyLiveAccountsScreen from './dashboardComponent/myLiveAccount/MyLiveAccountsScreen';
import DepositFunds from './dashboardComponent/DepositFunds/DepositFunds';
import RunningTrades from './dashboardComponent/RunningTrades/RunningTrades';
import Header from './dashboardComponent/Header';



///start localization
import I18n from 'react-native-i18n';
import english from '../i18n/english';
import chinese from '../i18n/chinese';


I18n.fallbacks = true;
I18n.translations = {
  english,
  chinese
};

///end localization

let data = [50, 45, 85, 10, 32, 53,  24, 50, 45, 85, 91, 32, 53,  24, 50  ];
let data2 = [30, 45, 95, 10, 22,35,  36, 60, 65,69, 90, 34, 78,  74, 36  ];
let data3 = [40, 45, 75, 10, 23, 83,  20, 80, 48, 90, 78, 95, 69,  21, 82  ];


const DashboardScreen=({navigation})=>{

  const { state:{language},SelectedLanguage } = useContext(AuthContext);

  const [isShow , setisShow] =useState(false);
  const [colorCode , setcolorCode] =useState('#606dee');
  const [pageView , setPageView] =useState(1);
  const [checked , setChecked] = useState(false);
  const [activeButton , setactiveButton] = useState(1);
  const [mapId , setmapId] = useState('');
  const [graphData , setGraphData] = useState(data);

  const [expanded, setExpanded] = useState(null);

useEffect(() => {

  const unsubscribe = navigation.addListener('blur', (e) => {
   navigation.closeDrawer();
  });

  return unsubscribe;
}, [navigation]);


	return(
    <SafeAreaView style={{flex:1,backgroundColor:'#2c14de'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
		<View style={{flex:1}}>

    {/* start header view*/}
    <View>
      <Header 
        navigation={navigation} 
        SelectedLanguage={SelectedLanguage}
      />
    </View>
  {/* End header view*/}

  {/* start graph view*/}
    <View style={{ overflow:'hidden'}}>
      <View style={styles.graphUpTextView}>
        <Text style={styles.graphUpText}>Weekday Vs Trades</Text>
      </View>
      <View style={{ overflow:'hidden'}}>
      <AreaChart
        style={{ height: 200}}
        data={graphData}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: colorCode,stroke: 'white', 
          strokeWidth:2,
          strokeBottomWidth:0,
          fillOpacity:0.5,
          strokeOpacity:0.5,
          strokeLinejoin:'round',
          scale:1,
          
         }}
        numberOfTicks={0}
        animate
      >
        <Grid />
    </AreaChart>
    </View>
        {/*graph down View*/}
    <View style={styles.graphDownView}>

      <View style={styles.firstButton}>
        <TouchableOpacity activeOpacity={0.8} 
        onPress={()=>{setGraphData(data),setcolorCode('#606dee')}}
        >
        <View style={{flexDirection:'row',padding:'2%'}}>
          <View style={[styles.circleView,{backgroundColor:'#606dee'}]}/>
          <Text style={{color:'white',paddingHorizontal:5,marginTop:-2}}>
            All Trades 
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.firstButton}>
        <TouchableOpacity activeOpacity={0.8}
          onPress={()=>{setGraphData(data2),setcolorCode('#df50bf')}}
        >
        <View style={{flexDirection:'row',padding:'2%',}}>
          <View style={styles.circleView}/>
          <Text style={{color:'white',paddingHorizontal:5,marginTop:-2}}>
            Buy
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.firstButton}>
        <TouchableOpacity activeOpacity={0.8}
          onPress={()=>{setGraphData(data3),setcolorCode('#1f782b')}}
        >
        <View style={{flexDirection:'row',padding:'2%'}}>
          <View style={[styles.circleView,{backgroundColor:'#1f782b'}]}/>
          <Text style={{marginTop:-2,color:'white',paddingHorizontal:"1%"}}>
            Sale
          </Text>
        </View>
        </TouchableOpacity>
      </View>

    </View>

    </View>

      {/*start all trade view here*/}
      <View style={styles.TradeListView}>

        <View style={styles.TradeButtonView}>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(1),
                setactiveButton(1)
              }}
            >
              <Text style={ activeButton === 1 ?  styles.buttonActive : styles.buttonTextStyle}>
                A/C VS Trades
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(2),
                setactiveButton(2)
              }}
            >
              <Text style={ activeButton === 2 ?  styles.buttonActive : styles.buttonTextStyle}>
                Ticket Vs P/L
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(3),
                setactiveButton(3)
              }}
            >
              <Text style={ activeButton ===3 ?  styles.buttonActive : styles.buttonTextStyle}>
                A/C VS P/L
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(4),setactiveButton(4)}}
            >
              <Text style={ activeButton ===4 ?  styles.buttonActive : styles.buttonTextStyle}>
                Symbol VS Trades
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(5),setactiveButton(5)}}
            >
              <Text style={ activeButton ===5 ?  styles.buttonActive : styles.buttonTextStyle}>
                Month VS P/L
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={()=>{setPageView(6),setactiveButton(6)}}
            >
              <Text style={ activeButton ===6 ?  styles.buttonActive : styles.buttonTextStyle}>
                WeekDay Vs Trades
              </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>

        </View>

          {/*AcVsPlScreen*/}
        <View style={styles.TradeDetailsView}>

        {
          pageView === 1 ? <AcVsPlScreen/> : null
        }
        {
          pageView === 2 ? <AcVsPlScreen/> : null
        }
        {
          pageView === 3 ? <AcVsPlScreen/> : null
        }
        {
          pageView === 4 ? <AcVsPlScreen/> : null
        }
        {
          pageView === 5 ? <AcVsPlScreen/> : null
        }
        {
          pageView === 6 ? <AcVsPlScreen/> : null
        }

        </View>

      </View>

        {/* start my live account here*/}
    
        <View style={styles.myLiveAccountView}>
          <View style={{width:'100%'}}>

            <MyLiveAccountsScreen navigation={navigation} />
            
          </View>
        {/* end my live account here*/}
        </View>

         {/* start DepositFunds here*/}
    
        <View style={[styles.myLiveAccountView]}>
          <View style={{width:'100%'}}>

            <DepositFunds navigation={navigation} />
            
          </View>
        {/* end my live account here*/}
        </View>

        <View style={[styles.myLiveAccountView]}>
          <View style={{width:'100%'}}>

            <RunningTrades navigation={navigation} />
            
          </View>
        {/* end my live account here*/}
        </View>
  
			
		</View> 
    </ScrollView>
    </SafeAreaView>
	);
};

const styles = StyleSheet.create({
  headerView:{
    width:'95%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  graphUpTextView:{
    width:'100%',
    alignItems:'center',
    paddingVertical:10,
  },
  graphUpText:{
    fontSize:18,
    color:'white',
  },
  graphDownView:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:8,
  },
  firstButton:{
    paddingHorizontal:5,
  },
  circleView:{
    height:15,
    width:15,
    borderRadius:50,
    backgroundColor:'#df50bf',
    borderWidth:1,
    borderColor:'#fff',
  },
  languageStyle:{
    color:'#fff',
    paddingVertical:4,
    paddingHorizontal:3
  },
  TradeListView:{
    paddingVertical:'6%',
    backgroundColor:'#fefcfd',
    width:'100%',
  },
  TradeButtonView:{
    flexDirection:'row',
    paddingHorizontal:2,
  },
  
  buttonTextStyle:{
    color:'#a8a8a8',
    borderColor:'#a8a8a8',
    borderWidth:1,
    paddingVertical:8,
    paddingHorizontal:3,
    fontSize:13,
    borderRadius:5,
  },

   buttonActive:{
    color:'#a8a8a8',
    borderWidth:1,
    paddingVertical:8,
    paddingHorizontal:3,
    fontSize:13,
    borderRadius:5,
    borderColor:'#5a47e8',
    shadowColor: '#5a47e8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
   },

  buttonView:{
    backgroundColor:'#ffffff',
    paddingHorizontal:4,
  },

  TradeDetailsView:{
    width:'100%',
    paddingVertical:6,
  },

  myLiveAccountView:{
    width:'100%',
    alignItems:'center',
  },
});

export default DashboardScreen;

