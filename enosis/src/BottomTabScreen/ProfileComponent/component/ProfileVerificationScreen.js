import React ,{Component,useEffect,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import {Context as AuthContext} from '../../../context/AuthContext';
import ProfileVerification from './ProfileVerification/ProfileVerification';
import UploadedDocuments from './ProfileVerification/UploadedDocuments';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProfileVerificationScreen=({navigation})=>{

	const { state:{language},SelectedLanguage } = useContext(AuthContext);
	const [screenHeight , setscreenHeight]=useState(HEIGHT);
	const [screenWidth , setscreenWidth]=useState(WIDTH);
	const [activeButton,setActiveButton]=useState(1);
	const [pageView , setPageView] =useState(1);

const ScreenChange=()=>{
		return(
			setscreenHeight(Dimensions.get('window').height),
			setscreenWidth(Dimensions.get('window').width)
			// console.log(screenHeight,screenWidth)
		);
	};

	return(
		<SafeAreaView style={{flex:1,}}>
		<View style={{flex:1,}} onLayout={ScreenChange}>
		<Image source={require('../../image/Profile-verify.jpg')} 
			style={styles.imageBackgroundStyle} 
			resizeMode="cover"
		/>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex:1}}>
			{/*start Header Area */}
			<View>
				<Header
					navigation={navigation}
					title="Verify Profile"
					SelectedLanguage={SelectedLanguage}
				/>
			</View>
		{/*End Header Area */}

		{/*Start Text Area */}
		<View style={styles.TextAreaView}>
			<Text style={styles.TextStyle}>You profile is fully verified</Text>
			<Text style={styles.TextStyle}>Thanks for staying with us</Text>
		</View>
		{/*End Text Area */}

		{/*Start Body Area */}
		<View style={screenHeight>screenWidth?styles.bodyAreaView:styles.bodyAreaViewLand}>
			{/* Start body View*/}
			<View style={{alignItems:'center',paddingVertical:'2%',}}>
			<View style={styles.bodyView}>
				<View style={{width:'50%'}}>
				<TouchableOpacity
					onPress={()=>{setActiveButton(1),setPageView(1)}}
				>
				<View style={activeButton===1?[styles.bodyButton,{paddingHorizontal:'7%'}]
				:[styles.inActiveButton,{paddingHorizontal:'7%',}]}>
					<Text style={activeButton===1?styles.ActiveButtonText:styles.inActiveButtonText}>
					PROFILE VERIFICATION</Text>
				</View>
				</TouchableOpacity>
				</View>

				<View style={{width:'50%'}}>
				<TouchableOpacity onPress={()=>{setActiveButton(2),setPageView(2)}}>
				<View style={activeButton===2?styles.bodyButton:styles.inActiveButton}>
					<Text style={activeButton===2?styles.ActiveButtonText:styles.inActiveButtonText}>
					UPLOADED DOCUMENTS</Text>
				</View>
				</TouchableOpacity>
				</View>
			</View>
			</View>
			{/* End body View */}
		</View>
		{/*End Body Area */}

		{/*Start Body Text Area */}
			<View>
				{pageView===1?<ProfileVerification/>:null}
				{pageView===2?<UploadedDocuments/>:null}
			</View>
		{/*End Body Text Area */}

		</View>
		</ScrollView>
		</View>
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
TextAreaView:{
	paddingVertical:'6%',
	alignItems:'center',
},
TextStyle:{
	color:'#999',
	fontSize:18,
},
bodyAreaView:{
	marginTop:HEIGHT/2.5,
	paddingVertical:'3%',
},
bodyAreaViewLand:{
	marginTop:WIDTH/4,
},
bodyView:{
	flexDirection:'row',
	width:'90%',
	backgroundColor:'#e5e5e5',
	borderColor:'#e5e5e5',
	borderRadius:25,
},
 	bodyButton:{
 		backgroundColor:'#fff',
 		paddingVertical:'6%',
 		borderWidth:1,
 		paddingHorizontal:'6%',
 		borderRadius:25,
 		borderColor:'#e5e5e5',
 		width:'100%',
 	},
 	inActiveButton:{
 		backgroundColor:'#e5e5e5',
 		paddingVertical:'6%',
 		borderWidth:1,
 		paddingHorizontal:'6%',
 		borderRadius:25,
 		borderColor:'#e5e5e5',
 		width:'100%',
 	},
 	inActiveButtonText:{
 		color:'#9296a1',
 		fontSize:12,
 		textAlign:'center',
 	},
ActiveButtonText:{
 		color:'#000',
 		fontSize:12,
 		textAlign:'center',
 	},
 
});

export default ProfileVerificationScreen;