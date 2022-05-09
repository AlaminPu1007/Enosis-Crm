import React ,{Component,useEffect,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import Header from '.././BottomTabScreen/dashboardComponent/Header';
import {Context as AuthContext} from '.././context/AuthContext'; 
import CustomerTreeScreen from './IBComponent/CustomerTree/CustomerTreeScreen'
import CommissionHistoryScreen from './IBComponent/CommissionHistory/CommissionHistoryScreen'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const IBScreen=({navigation})=>{

	const { state:{language},SelectedLanguage } = useContext(AuthContext);
	const [activeButton,setActiveButton]=useState(1);
	const [pageView , setPageView] =useState(1);
	
//#2c14de
	return(
		<SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
		<View style={{flex:1}}>
			{/*start Header Area */}
			<View style={{backgroundColor:'#2c14de'}}>
				<Header
					navigation={navigation}
					SelectedLanguage={SelectedLanguage}
				/>
			</View>
		{/*End Header Area */}

		{/*Start Button Area */}
			<View style={styles.BodyButton}>
				<View style={{paddingHorizontal:'2%',}}>
				<TouchableOpacity activeOpacity={0.5}
					onPress={()=>{setActiveButton(1),setPageView(1)}}
				>
					<View style={[styles.buttonView]}>
						<Text style={activeButton===1?[styles.buttonText,{paddingHorizontal:'6%'}]:styles.InActivebuttonText}>
						Customer Tree</Text>
					</View>
				</TouchableOpacity>
				</View>

				<View style={{paddingHorizontal:'2%',}}>
				<TouchableOpacity activeOpacity={0.5}
					onPress={()=>{setActiveButton(2),setPageView(2)}}
				>
					<View style={styles.buttonView}>
						<Text style={activeButton===2?styles.buttonText:styles.InActivebuttonText}>
						Commission History</Text>
					</View>
				</TouchableOpacity>
				</View>
			</View>
		{/*End Button Area */}

		<View>
			{
				pageView===1?<CustomerTreeScreen/>:null
			}
			{
				pageView===2?<CommissionHistoryScreen/>:null
			}
		</View>

		</View>
		</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
imageBackgroundStyle:{
	flex: 1,
	position: 'absolute',
	width: '100%',
	height: HEIGHT*1.5,
},
BodyButton:{
	justifyContent:'center',
	alignItems:'center',
	flexDirection:'row',
	paddingVertical:'5%',
	backgroundColor:'#2c14de',
},

buttonView:{
	borderWidth:1,
	borderColor:'#5d4cdd',
	borderRadius:8,
	alignItems:'center',
},
buttonText:{
	color:'#fff',
	fontSize:16,
	textAlign:'center',
	paddingVertical:'3%',
	paddingHorizontal:'3%',
},
InActivebuttonText:{
	color:'#6f60eb',
	fontSize:16,
	textAlign:'center',
	paddingVertical:'3%',
	paddingHorizontal:'3%',
},

});

export default IBScreen;