import React,{Component,useState,useEffect,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	ImageBackground,
	Image,
	ScrollView,
	TextInput,
	Dimensions,
	TouchableOpacity,
	Picker,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import FitImage from 'react-native-fit-image';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';
import ResponsiveImage from "react-native-responsive-image";

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


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SignInScreen =({navigation})=>{

	const {state,SelectedLanguage,SignIn} = useContext(AuthContext);

	const [email , setEmail]=useState('bhaisofts@gmail.com');
	const [password , setpassword]=useState('asdf1234');
	const [secureText , setsecureText]=useState(true);
	const [Language , setLanguage]=useState('english');

	const [screenHeight , setscreenHeight]=useState(WIDTH);
	const [screenWidth , setscreenWidth]=useState(HEIGHT);

	const ScreenChange=()=>{
		return(
			setscreenHeight(Dimensions.get('window').height),
			setscreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
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
		

			<View style={styles.InputStyleView}>

				<View style={styles.firstInputView}>

				<AntDesign name="mail" size={25} color="#0366D6"/> 
				<TextInput 
					style={styles.textInput}
					value={email}
					onChangeText={text=>setEmail(text)}
					placeholder={I18n.t('email',{locale:Language})}
					placeholderTextColor="#0366D6"
					keyboardType="email-address"

					returnKeyType = { "next" }
				  onSubmitEditing={() => { this.secondTextInput.focus(); }}
				  blurOnSubmit={false}
				/>
				<AntDesign name="downcircleo" size={23} color="#0366D6"/> 

				</View>


				<View style={styles.SecondInputView}>
					<Feather name="lock" size={25} color="#0366D6"/> 
					<TextInput 
						style={styles.textInput}
						value={password}
						onChangeText={text=>setpassword(text)}
						secureTextEntry={secureText}
						placeholder={I18n.t('password',{locale:Language})}

						ref={(input) => { this.secondTextInput = input; }}
					/>
					{secureText ? <Entypo name="eye-with-line" size={25} color="#0366D6"
							onPress={()=>{setsecureText(false)}}
						/> 
						: <AntDesign name="eyeo" size={25} color="#0366D6"
							onPress={()=>{setsecureText(true)}}
						/>
					} 
				</View>

				<View style={styles.forgotTextView}>
					<TouchableOpacity onPress={()=>{navigation.navigate('Forgot')}} 
						activeOpacity={0.8}
					>
					<Text style={styles.forgotTextStyle}>{I18n.t('forgotPassword',{locale:Language})}?</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.buttonView}>
					<TouchableOpacity 
						onPress={()=>{SignIn()}}
					activeOpacity={0.5}>
						<Text style={styles.buttonTextStyle}>{I18n.t('login',{locale:Language})}</Text>
					</TouchableOpacity>
				</View>

			</View>

			<View style={styles.footer}>

				<View style={styles.socialLoginView}>

					<Text style={styles.loginText}>{I18n.t('orLogin',{locale:Language})}</Text>

					<View style={{flexDirection:'row',padingHorizontal:10}}>
						<Entypo name="facebook-with-circle" size={35} color="#0366D6"
							style={{color:'#2196F3',paddingHorizontal:5}}
						/> 
						<AntDesign name="google" size={35} color="#0366D6"
							style={{color:'orange',paddingHorizontal:5}}
						/> 
					</View>
				</View>
			</View>

				<View style={styles.signUpView}>

					<View style={{width:'75%',flexDirection:'row',overflow:'hidden'}}>
						<Text style={styles.signUpTextStyle}>{I18n.t('dontAccount',{locale:Language})}?</Text>
						<TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} 
							activeOpacity={0.8}
						>
							<Text style={{color:"#0366D6",fontSize:16}}> {I18n.t('singUp',{locale:Language})}</Text>
						</TouchableOpacity>
					</View>

						{/*language picker */}
						<View style={styles.languagePicker}>
							<Text style={{fontSize:16,color:'gray'}}>{Language}: </Text>
				      <Picker
				        selectedValue={Language}
				        style={{ height: 25, width: 22 }}
				        onValueChange={(itemValue, itemIndex) => 
				        	{setLanguage(itemValue),SelectedLanguage(itemValue) }}>

				        <Picker.Item label="english" value="english" />
				        <Picker.Item label="chinese" value="chinese" />
				        
				      </Picker>
				    </View>
					
				</View>
			</View>
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
    height: HEIGHT,
	},
	container:{
		flex:1,
		alignItems:'center',
		paddingVertical:10
	},
	LogoView:{
		flexDirection:'column',
		//overflow:'hidden',
	},
	LogoViewL:{
		flexDirection:'row',
		//overflow:'hidden',
		paddingTop:10,
	},

	logoStyleView:{
		flex:1,
		padding:10,
		width:'90%',
	},

	firstLogoView:{
		width:null,
		height:null,
	},
	firstLogoViewL:{
		width:null,
		height:null,
		alignItems:'flex-start',
		//marginLeft:-80
	},
	firstLogoStyle:{
		width:100,
		height:30,
		overflow:'hidden',//01533549227
	},
	secondLogoView:{
		width:null,
		height:null,
	},
	secondLogoStyle:{
		width:320,
		height:320,
		overflow:'hidden'
	},
	InputStyleView:{
		width:'100%',
		alignItems:'center',
	  paddingVertical:'20%',
		borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor:'white',
    overflow:'hidden',
	},
	firstInputView:{
		flexDirection:'row',
		borderBottomWidth:1,
	},
	SecondInputView:{
		flexDirection:'row',
		borderBottomWidth:1,
		marginTop:40
	},
	textInput:{
		width:'70%',
		marginHorizontal:10,
		fontSize:16,
	},
	forgotTextView:{
		alignItems: 'flex-end',
		width:'90%',
		paddingTop:20,
		paddingBottom:10
	},
	forgotTextStyle:{
		color:'#0366D6',
	},
	buttonView:{
		width:'80%',
		backgroundColor:'#2196F3',
		paddingVertical:11,
		borderRadius:30,
		marginTop:10,
	},
	buttonTextStyle:{
		textAlign:'center',
		color:'white',
		fontSize:18,
	},
	footer:{
		overflow:'hidden',
	},
	socialLoginView:{
		paddingVertical:15,
	},
	loginText:{
		color:'#0366D6',
		fontSize:18,
	   paddingVertical:5,
	  textAlign:'center'
	},
	signUpView:{
		width:'100%',
		alignItems:'flex-start',
		flexDirection:'row',
		paddingVertical:5,
		paddingBottom:5,
		//borderWidth:1,
	},
	signUpTextStyle:{
		fontSize:16,
		color:'gray',
	},
	languagePicker:{
		width:'25%',
		flexDirection:'row',
		overflow:'hidden',
	},

});

export default SignInScreen;