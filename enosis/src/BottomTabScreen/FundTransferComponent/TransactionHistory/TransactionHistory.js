import React,{Component,useState,useEffect} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	Animated,
  FlatList,
} from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import {Context as AuthContext} from '../context/AuthContext';
import CheckBox from 'react-native-check-box';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import DepositScreen from './component/DepositScreen';
import WithDrawScreen from './component/WithDrawScreen';
import InternalTransferScreen from './component/InternalTransferScreen';


let CONTENT = [
  {
    id:1,
    title: '12 Mar,2020 21:07',
    checked:false,
    acNo: '2100096555 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:2,
    title: '13 Mar,2020 21:07',
    checked:false,
    acNo: '2100096556 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:3,
    title: '14 Mar,2020 21:07',
    checked:false,
    acNo: '2100096557 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:4,
    title: '15 Mar,2020 21:07',
    checked:false,
    acNo: '2100096558 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:5,
    title: '16 Mar,2020 21:07',
    checked:false,
    acNo: '2100096559 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:6,
    title: '17 Mar,2020 21:07',
    checked:false,
    acNo: '2100096560 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:7,
    title: '18 Mar,2020 21:07',
    checked:false,
    acNo: '2100096561 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:8,
    title: '19 Mar,2020 21:07',
    checked:false,
    acNo: '2100096562 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:9,
    title: '20 Mar,2020 21:07',
    checked:false,
    acNo: '2100096563 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:10,
    title: '18 Mar,2020 21:07',
    checked:false,
    acNo: '2100096564 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:11,
    title: '12 Mar,2020 21:07',
    checked:false,
    acNo: '2100096565 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
];

let rowSize=[
  {
    Rowvalue:'5',
    id:1,
  },
  {
    Rowvalue:'10',
    id:2,
  }
];


const TransactionHistory =({navigation})=>{

  const [array , setArray]=useState(CONTENT);
  const [copyArray , setcopyArray]=useState(CONTENT);
  const [isChecked , setIsChecked]=useState(false);
  const [value , setValue]=useState('');
  const [showValue , setShowValue]=useState(false);
  const [activebutton, setActiveButton] = useState(1);
  const [pageView , setPageView] =useState(1);
  
  ///pagination useState
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage , setPostPerPage]=useState(5);
  

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = array.slice(indexOfFirstPost,indexOfLastPost);

  
///start pagination screen here

const totalPosts = array.length;
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
    pageNumbers.push(i);
  }
 const [pageLength,setPagelength] = useState(pageNumbers.length);


useEffect(()=>{
  setPagelength(pageNumbers.length)
},[pageNumbers.length])
  

const pagination =()=>{


  const CounterFunction=(type)=>{
    setPagelength(pageNumbers.length)
    if(type==='Increase'){

      if(currentPage>=1&&currentPage<pageNumbers.length){
        
        return(
          setCurrentPage(currentPage+1)
        );
      }

    }else if(type==='decrease'){
      
      if(currentPage>1&&currentPage<=pageNumbers.length){
        return(
          setCurrentPage(currentPage-1)
        );
      }
    }
  }

  return(
   <View style={{flexDirection:'row'}}>
    <View>
      <TouchableOpacity activeOpacity={0.5}
      onPress={()=>{CounterFunction('decrease')}} >
        <AntDesign name="left" size={18} color='#fff' 
        style={{paddingVertical:7,paddingHorizontal:10}}/>
      </TouchableOpacity>
    </View>
    
    <View>
      <TouchableOpacity activeOpacity={0.5}
      onPress={()=>{CounterFunction('Increase')}} >
        <AntDesign name="right" size={18} color='#fff' 
        style={{paddingVertical:7,paddingHorizontal:10}}/>
      </TouchableOpacity>
    </View>

   </View>
  );
}
///end pagination screen here




		
		return(
			<View style={styles.container}> 
			<View style={styles.myLiveAccountView}>


				{/*start search box here*/}
        <View style={{width:'100%'}}>
          <View style={styles.searchView}>

            <View style={{paddingBottom:15}}>
              <Text style={{color:'#fff',marginLeft:10,fontSize:18}}>
              TRANSACTION HISTORY</Text>
            </View>

            {/*start button page */}
            <View style={{flexDirection:'row',paddingVertical:5}}>
            <ScrollView horizontal 
              showsHorizontalScrollIndicator={false}
            >
              <View style={{paddingHorizontal:5}}>
                <TouchableOpacity activeOpacity={0.5}
                  onPress={()=>{setPageView(1),
                    setActiveButton(1)
                  }}
                 >
                <View style={styles.buttonView}>
                  <Text style={activebutton===1? styles.buttonText:styles.buttonTextStyle}>
                  DEPOSIT</Text>
                 </View>
                </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal:5}}>
                <TouchableOpacity activeOpacity={0.5}
                   onPress={()=>{setPageView(2),
                    setActiveButton(2)
                  }}
                >
                <View style={styles.buttonView}>
                  <Text style={activebutton===2? styles.buttonText:styles.buttonTextStyle}>
                  WITHDRAW </Text>
                 </View>
                </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal:5}}>
                <TouchableOpacity activeOpacity={0.5}
                   onPress={()=>{setPageView(3),
                    setActiveButton(3)
                  }}
                >
                <View style={styles.buttonView}>
                  <Text style={activebutton===3? styles.buttonText:styles.buttonTextStyle}>
                  INTERNAL TRANSFER</Text>
                 </View>
                </TouchableOpacity>
              </View>

            </ScrollView>
            </View>
            {/*End button page */}

            {/*Rows per page*/}
            <View style={{alignItems:'center'}}>
            <View style={styles.RowsPerPage}>
            
              <View style={{flexDirection:'row',width:'50%'}}>
                <Text style={{color:'#fff',paddingHorizontal:10,fontSize:16,paddingVertical:5}}> 
                Rows Per Page </Text>
                
                {showValue?
                <View >
                  {rowSize.map(item=>{
                    return(
                      <View key={item.id}>
                      <TouchableOpacity activeOpacity={0.5}
                      onPress={()=>{
                        setPostPerPage(item.Rowvalue),setShowValue(!showValue)
                      }}>
                        <Text style={{color:'#fff',paddingHorizontal:10,paddingVertical:5,
                        fontSize:16,height:35,width:45,
                      }}>
                        {item.Rowvalue}
                        </Text>
                      </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
                :
                <Text style={{color:'#fff',paddingHorizontal:10,fontSize:16,
                borderBottomWidth:1,height:25,borderBottomColor:'#51aef8',
                height:35,width:45,paddingVertical:5,
              }}>
                {postPerPage}</Text>
              }
              
                <AntDesign name="down" size={18} color='#b9b9b9' 
                  onPress={()=>{setShowValue(!showValue)}}
                  style={{paddingHorizontal:10,marginTop:2,paddingVertical:5}}
                />
              </View>

              <View style={{width:'50%',flexDirection:'row',
              justifyContent:'flex-end',
            }}>

              <View>
                <Text style={{color:'#fff',paddingHorizontal:10,
                paddingVertical:5,fontSize:16,}}>
                {currentPage} of {pageLength}</Text>
              </View>
                
                <View>
                  {pagination()}
                </View>

              </View>
            </View>
            </View>


          </View>
         </View>
        {/*End search box here*/}

      {/* start DepositScreen*/}
       <View style={{width:'100%'}}>
       { pageView===1?
          <DepositScreen currentPosts={currentPosts} navigation={navigation} />:null
       }
       {
         pageView===2?
        <WithDrawScreen currentPosts={currentPosts} navigation={navigation} />:null
       }
       {
         pageView===3?
        <InternalTransferScreen currentPosts={currentPosts} navigation={navigation} />:null
       }
       </View>
     {/* End DepositScreen*/}
     
       </View>
			</View>
		
		);
}

export default TransactionHistory;

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	myLiveAccountView:{
    width:'100%',
    alignItems:'center',
  },
  searchView:{
    paddingTop:'5%',
    paddingBottom:'13%',
  },

  RowsPerPage:{
    paddingVertical:5,
    height:72,
    flexDirection:'row',
    width:'95%',
  },
  buttonView:{
    paddingVertical:10,
    borderWidth:1,
    backgroundColor:'#2c14de',
    borderColor:'#5d4cdd',
    borderRadius:8,
  },
  buttonText:{
    fontSize:15,
    color:'#fff',
    textAlign:'center',
    paddingHorizontal:22,
  },
  buttonTextStyle:{
    fontSize:15,
    color:'#8d86ea',
    textAlign:'center',
    paddingHorizontal:22,
  },
});


