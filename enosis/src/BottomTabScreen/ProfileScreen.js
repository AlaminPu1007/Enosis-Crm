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
import Header from '../component/Header';
import {Context as AuthContext} from '../context/AuthContext'; 
import  InformationScreen from './ProfileComponent/InformationScreen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProfileScreen=({navigation})=>{

	const { state:{language},SelectedLanguage } = useContext(AuthContext);
	const [screenHeight , setscreenHeight]=useState(WIDTH);
	const [screenWidth , setscreenWidth]=useState(HEIGHT);
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
		<Image source={require('./image/Profile-verify-profile.jpg')} 
			style={styles.imageBackgroundStyle} 
			resizeMode="stretch"
		/>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex:1}}>
			{/*start Header Area */}
			<View>
				<Header
					navigation={navigation}
					title="Profile"
					SelectedLanguage={SelectedLanguage}
				/>
			</View>
		{/*End Header Area */}
			<View style={screenHeight>screenWidth?{flexDirection:'row',paddingTop:'3%',paddingBottom:'20%'}:
				{flexDirection:'row',paddingTop:'3%',}
		}>

				<View style={screenHeight>screenWidth?styles.firstView:styles.firstViewL}>
				<View style={{paddingHorizontal:'2%'}}>
					<Text style={{fontSize:17,color:'white',paddingVertical:3}}>
					Md Al Amin</Text>

					<View>
						<Text style={{fontSize:15,color:'#36ad2d',paddingVertical:3,
						textAlign:'center',width:'100%'}}>
						Status: Verified</Text>
					</View>

					<View style={{paddingVertical:5}}>
						<Text style={styles.idStyleView}>
						ID: 1</Text>
					</View>
				</View>
				</View>

				<View style={screenHeight>screenWidth?styles.secondView:styles.secondViewL}>
					
					<Image 
						source={require('./image/profile-pic.jpg')}
						style={screenHeight>screenWidth?{height: 160,
						borderRadius:160/2,aspectRatio:1,marginTop:HEIGHT/16,
						}
						:{height: 180,borderRadius:180/2,aspectRatio:1,marginTop:HEIGHT/16}}/>

				</View>
			</View>

			{/* start button View*/}
			<View style={{alignItems:'center'}}>
				<View style={screenHeight>screenWidth?styles.buttonView:styles.buttonViewL}>
					<View style={styles.FirstButtonView}>
						<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{navigation.navigate('Change-password')}} >
						<View style={[styles.styleButton,{
							paddingVertical:30,paddingHorizontal:18,
						}]}>
							<Text style={styles.textStyle}>Change</Text>
							<Text style={styles.textStyle}>Password</Text>
						</View>
						</TouchableOpacity>
					</View>

					<View style={styles.FirstButtonView}>
						<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{navigation.navigate('Profile-verification')}} >
						<View style={styles.styleButton}>
							<Text style={styles.textStyle}>Profile</Text>
							<Text style={styles.textStyle}>Verification</Text>
						</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			{/* End button View*/}
			{/* Start body View*/}
			<View style={{alignItems:'center',paddingVertical:'2%',}}>
			<View style={styles.bodyView}>
				<View style={{width:'50%'}}>
				<TouchableOpacity
					onPress={()=>{setActiveButton(1),setPageView(1)}}
				>
				<View style={activeButton===1?[styles.bodyButton,{paddingHorizontal:'7%'}]
				:[styles.inActiveButton,{paddingHorizontal:'7%',}]}>
					<Text style={activeButton===1?styles.ActiveButtonText:styles.inActiveButtonText}>INFORMATION</Text>
				</View>
				</TouchableOpacity>
				</View>

				<View style={{width:'50%'}}>
				<TouchableOpacity onPress={()=>{setActiveButton(2),setPageView(2)}}>
				<View style={activeButton===2?styles.bodyButton:styles.inActiveButton}>
					<Text style={activeButton===2?styles.ActiveButtonText:styles.inActiveButtonText}>BANK INFORMATION</Text>
				</View>
				</TouchableOpacity>
				</View>
			</View>
			</View>
			{/* End body View */}

			{/* start table data View */}
			<View>
				{ pageView===1?<InformationScreen/>:null}
				{ pageView===2?<InformationScreen/>:null}
			</View>
			{/* End table data View */}
			
			{/* end root view */}
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
	firstView:{
 		paddingHorizontal:'3%',
 		alignItems:'center',
 	},
 	firstViewL:{
 		width:'35%',
 		alignItems:'center',
 		zIndex:1,
 	},
 	secondView:{
 		position:'absolute',
 		right:WIDTH/3.5,
 		top:10,
 	},
 	secondViewL:{
 		width:'65%',
 	},
 	idStyleView:{
 		fontSize:14,
 		color:'white',
 		paddingVertical:5,
		textAlign:'center',
		borderWidth:1,
		width:'95%',
		borderRadius:15,
		borderColor:'#442fe1',
 	},
 	buttonView:{
 		width:'85%',
 		flexDirection:'row',
 		justifyContent:'space-between',
 		paddingBottom:'5%',
 		zIndex:1,
  },
  buttonViewL:{
 		width:'85%',
 		flexDirection:'row',
 		justifyContent:'space-between',
 		zIndex:1,
 		bottom:'13%',
  },
 	styleButton:{
 		borderWidth:1,
 		borderColor:'#ddd',
 		paddingVertical:30,
 		paddingHorizontal:13,
 		borderRadius:50,
 		backgroundColor:'#fcfcfd',
 	},
 	textStyle:{
 		fontSize:15,
 		color:'#2c14de',
 		textAlign:'center',
 		fontWeight:'bold',
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
 		fontSize:14,
 		textAlign:'center',
 	},
ActiveButtonText:{
 		color:'#000',
 		fontSize:14,
 		textAlign:'center',
 	},
 	
});

export default ProfileScreen;