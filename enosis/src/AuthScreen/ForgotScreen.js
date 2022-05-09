import React,{Component,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	Image,
	Dimensions,
	TextInput,
	TouchableOpacity,
	Picker,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResponsiveImage from "react-native-responsive-image";
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';

import {Context as AuthContext} from '../context/AuthContext';

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

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const ForgotScreen =({navigation})=>{

	const {state:{language}}=useContext(AuthContext);

	const [email, setEmail]=useState('');

const [screenHeight , setscreenHeight]=useState(WIDTH);
const [screenWidth , setscreenWidth]=useState(HEIGHT);

	const ScreenChange=()=>{
		return(
			setscreenHeight(Dimensions.get('window').height),
			setscreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
		);
	};

	const ShowValue=()=>{
		return(
			console.log(email)
		);
	};


	return(
		<SafeAreaView style={{flex:1}}>	
		<View style={{flex:1}} onLayout={ScreenChange}>
		<Image source={require('./image/login_background.jpg')} 
				style={styles.imageBackgroundStyle} 
		/>
		<ScrollView showsVerticalScrollIndicator={false}>
		<View style={styles.container}>

		<View style={{width:'90%',alignItems:'center'}}>
					{/*start logo view*/}
			<View style={screenHeight>screenWidth?styles.LogoView:styles.LogoViewL}>
				<View style={{padding:5}}>
					<ResponsiveImage
	          source={require('./image/logo.png')}
	          initWidth="105"
	          initHeight="30"
        	/>
				</View>
				<View>
					<ResponsiveImage
	          source={require('./image/man_logo.png')}
	          initWidth="350"
	          initHeight="300"
        	/>
				</View>
			</View>

		{/*start Input view*/}
			<View style={styles.inputView}>

				<View style={{paddingVertical:15}}>
					<View style={styles.TextInputView}>
						<Feather name="mail" size={25} color="#0366D6" 
						style={{marginTop:3}}/> 
						<TextInput
							placeholder={I18n.t('forgotScreen.email',{locale:language})}
							placeholderTextColor="#0366D6"
							style={styles.textInputStyle}
							onChangeText={text => setEmail(text)}
							value={email}
							keyboardType="email-address"
						/>
						<AntDesign name="downcircleo" size={23} color="#0366D6"/> 
				</View>
			</View>

			<View style={styles.buttonView}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>{ShowValue(email)}}
				>
				<View style={styles.buttonStyle}>
					<Text style={styles.buttonText}>{I18n.t('forgotScreen.submit',{locale:language})}</Text>
					</View>
				</TouchableOpacity>
			</View>

			</View>

					{/* Authentication button  */}
				<View style={styles.AuthButton}>

					<View >
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={()=>{navigation.navigate('SignIn')}}
						>
						<View style={[styles.loginButton,{backgroundColor:'#E57599'}]}>
							<Text style={styles.buttonText}>{I18n.t('forgotScreen.login',{locale:language})}</Text>
						</View>
						</TouchableOpacity>
					</View>

					<View >
					<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>{navigation.navigate('SignUp')}}
					>
						<View style={[styles.loginButton,
							{paddingVertical:10,paddingHorizontal:35,backgroundColor:'#EFA321'}]}>
							<Text style={[styles.buttonText,{fontSize:16}]}>{I18n.t('forgotScreen.singUp',{locale:language})}</Text>
						</View>
						</TouchableOpacity>
					</View>

				</View>

		</View>

		</View>
		</ScrollView>
		</View>
		</SafeAreaView>
	);
};

const styles= StyleSheet.create({
	imageBackgroundStyle:{
		flex: 1,
    position: 'absolute',
    width: '100%',
    height: HEIGHT,
	},
	container:{
		flex:1,
		alignItems:'center',
	},
	LogoView:{
		flexDirection:'column',
	},
	LogoViewL:{
		flexDirection:'row',
		paddingTop:10,
	},
	inputView:{
	  paddingVertical:'20%',
		borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor:'white',
    overflow:'hidden',
    alignItems:'center',
    width:'100%',
	},
	TextInputView:{
		borderBottomWidth:1,
		flexDirection:'row',
		width:'100%',
	},
	textInputStyle:{
		width:'75%',
		marginLeft:10,
		//borderWidth:1,
		fontSize:16,
	},
	buttonView:{
		width:'80%',
		paddingVertical:15,
	},
	buttonStyle:{
		width:'100%',
		backgroundColor:'#2196F3',
		paddingVertical:9,
		borderRadius:30,
		marginTop:15,
		alignItems:'center',
	},
	buttonText:{
		color:'white',
		fontSize:18,
	},
	AuthButton:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-between',
		//borderWidth:1,
		overflow:'hidden',
		paddingVertical:50
	},
	loginButton:{
		backgroundColor:'#2196F3',
		paddingVertical:9,
		borderRadius:20,
		marginTop:15,
		alignItems:'center',
		paddingHorizontal:40,
	},
});

export default ForgotScreen;