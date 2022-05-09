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
import  MaterialCommunityIcons  
from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context as AuthContext} from '../context/AuthContext';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

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

const SignUpScreen =({navigation})=>{

	const {state:{language}} = useContext(AuthContext);

	///text input state
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] =useState('');
	const [password, setPassword] =useState('');
	const [confirmPassword, setconfirmPassword] =useState('');
	const [secureText , setsecureText] = useState(true);
	const [secureTextAnother , setsecureTextAnother] = useState(true);
	///end text input state


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
			console.log(firstName,lastName,email,country,password,confirmPassword)
		);
	}


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

						<View style={styles.inputView}>

							<View style={{paddingVertical:15}}>
							<View style={styles.TextInputView}>
								<Feather name="mail" size={25} color="#0366D6" 
								style={{marginTop:3}}/> 
								<TextInput
									placeholder={I18n.t('SignUpScreen.firstName',{locale:language})}
									style={styles.textInputStyle}
									onChangeText={text => setfirstName(text)}
									value={firstName}

									returnKeyType = { "next" }
							    onSubmitEditing={() => { this.secondTextInput.focus(); }}
							    blurOnSubmit={false}

								/>
							</View>
							</View>

							<View style={{paddingVertical:5}}>
							<View style={styles.TextInputView}>
								<MaterialCommunityIcons name="account-outline" size={26} color="#0366D6" 
								style={{marginTop:3}}/> 
								<TextInput
									placeholder={I18n.t('SignUpScreen.lastName',{locale:language})}
									style={styles.textInputStyle}
									onChangeText={text => setlastName(text)}
									value={lastName}

									ref={(input) => { this.secondTextInput = input; }}

									returnKeyType = { "next" }
							    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
							    blurOnSubmit={false}
								/>
							</View>
							</View>

							<View style={{paddingVertical:5}}>
							<View style={styles.TextInputView}>
								<MaterialCommunityIcons name="account-outline" size={27} color="#0366D6" 
								style={{marginTop:3}}/> 
								<TextInput
									placeholder={I18n.t('SignUpScreen.email',{locale:language})}
									style={styles.textInputStyle}
									onChangeText={text => setEmail(text)}
									value={email}
									keyboardType="email-address"

									ref={(input) => { this.thirdTextInput = input; }}

									returnKeyType = { "next" }
							    onSubmitEditing={() => { this.fourTextInput.focus(); }}
							    blurOnSubmit={false}
								/>
							</View>
							</View>

							<View style={{paddingVertical:5}}>
							<View style={styles.TextInputView}>
								<AntDesign name="flag" size={25} color="#0366D6" 
								style={{marginTop:3}}/> 
								<TextInput
									value={country}
									placeholder={I18n.t('SignUpScreen.country',{locale:language})}
									editable={false}
									style={[styles.textInputStyle,{width:'70%',color:'black'}]}

									ref={(input) => { this.fourTextInput = input; }}
								/>
								<Picker
									selectedValue={country}
					        style={{ height: 25, width: 15 }}
					        onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
								>
									<Picker.Item label="Bangladesh" value="Bangladesh" />
        					<Picker.Item label="China" value="China" />
        					<Picker.Item label="Bangladesh" value="Bangladesh" />
        					<Picker.Item label="China" value="China" />
        					<Picker.Item label="Bangladesh" value="Bangladesh" />
        					<Picker.Item label="China" value="China" />
        					<Picker.Item label="Bangladesh" value="Bangladesh" />
        					<Picker.Item label="China" value="China" />

								</Picker>
							</View>
							</View>

							<View style={{paddingVertical:5}}>
							<View style={styles.TextInputView}>
								<Feather name="lock" size={25} color="#0366D6"
								style={{marginTop:3}}/> 
								<TextInput
									placeholder={I18n.t('SignUpScreen.password',{locale:language})}
									style={[styles.textInputStyle,{width:'70%'}]}
									onChangeText={text => setPassword(text)}
									value={password}
									secureTextEntry={secureText}

									returnKeyType = { "next" }
							    onSubmitEditing={() => { this.fiveTextInput.focus(); }}
							    blurOnSubmit={false}
								/>
								
								{secureText ? <Entypo name="eye-with-line" size={25} color="#0366D6" 
									onPress={()=>{setsecureText(false)}}
								/> 
									: <AntDesign name="eyeo" size={25} color="#0366D6" 
										onPress={()=>{setsecureText(true)}}
									/>
								}
								
							</View>
							</View>

							<View style={{paddingVertical:5}}>
							<View style={styles.TextInputView}>
								<Feather name="lock" size={25} color="#0366D6"
								style={{marginTop:3,}}/> 
								<TextInput
									placeholder={I18n.t('SignUpScreen.confirmPassword',{locale:language})}
									style={[styles.textInputStyle,{width:'70%'}]}
									onChangeText={text => setconfirmPassword(text)}
									value={confirmPassword}
									secureTextEntry={secureTextAnother}

									ref={(input) => { this.fiveTextInput = input; }}
								/>
								{secureTextAnother ? <Entypo name="eye-with-line" size={25} color="#0366D6"
									onPress={()=>{setsecureTextAnother(false)}}
								/> 
									: <AntDesign name="eyeo" size={25} color="#0366D6"
										onPress={()=>{setsecureTextAnother(true)}}
									/>
								}
							</View>
							</View>

							<View style={styles.buttonView}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={()=>{ShowValue(firstName,lastName,email,country,password,confirmPassword)}}
								>
								<View style={styles.buttonStyle}>
									<Text style={styles.buttonText}>{I18n.t('SignUpScreen.create',{locale:language})}</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.footerView}>
							<Text style={{fontSize:16,color:'gray'}}>{I18n.t('SignUpScreen.haveAccount',{locale:language})} </Text>
							<TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}
								activeOpacity={0.8}
							>
								<Text style={{fontSize:16,color:'#2196F3'}}>{I18n.t('SignUpScreen.login',{locale:language})}</Text>
							</TouchableOpacity>
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
	inputView:{
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
	footerView:{
		flexDirection:'row',
		paddingVertical:15,
		alignItems:'flex-start',
		//borderWidth:1,
		width:'100%'
	}
});

export default SignUpScreen;