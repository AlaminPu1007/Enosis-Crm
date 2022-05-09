import React, {useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import {Context as AuthContext} from '../../../context/AuthContext'; 

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ChangePasswordScreen=({navigation})=>{

	const { state:{language},SelectedLanguage } = useContext(AuthContext);
	const [screenHeight , setscreenHeight]=useState(WIDTH);
	const [screenWidth , setscreenWidth]=useState(HEIGHT);
	const [email , setEmail]=useState('');

const ScreenChange=()=>{
		return(
			setscreenHeight(Dimensions.get('window').height),
			setscreenWidth(Dimensions.get('window').width)
			// console.log(screenHeight,screenWidth)
		);
	};

const ClearText=()=>{
	return(
		setEmail('')
	);
}


	return(
		<SafeAreaView style={{flex:1,}}>
		<View style={{flex:1,}} onLayout={ScreenChange}>
		<Image source={require('../../image/Profile-verify-profile.jpg')} 
			style={styles.imageBackgroundStyle} 
			resizeMode="stretch"
		/>
		<ScrollView showsVerticalScrollIndicator={false}>
		<View style={{flex:1}}>
		{/*start Header Area */}
		<View>
			<Header
				navigation={navigation}
				title="Change Password"
				SelectedLanguage={SelectedLanguage}
			/>
		</View>
		{/*End Header Area */}

		{/*start Input Area */}
		<View style={{alignItems:'center',}}>
		<View style={styles.InputView}>
			<TextInput
				style={styles.textInput}
				placeholder="Enter Pin"
				placeholderTextColor="#fff"
				value={email}
				onChangeText={text=>setEmail(text)}
			/>
		</View>
		</View>
		{/*End Input Area */}

		{/*start ReSend Button Area */}
		<View style={{alignItems:'center',}}>
		<View style={{width:'85%',alignItems:'flex-end',}}>
			<TouchableOpacity activeOpacity={0.5}
				onPress={()=>{ClearText()}}
			>
			<View style={screenHeight>screenWidth?styles.ResendButtonView:styles.ResendButtonViewLand}>
				<Text style={styles.ButtonText}>Resend</Text>
			</View>
			</TouchableOpacity>
		</View>
		</View>
		{/*End ReSend Button Area */}

		{/*start Next Button Area */}
		<View style={{alignItems:'center',}}>
		<View style={{width:'85%',alignItems:'center',paddingVertical:'2%'}}>
			<TouchableOpacity activeOpacity={0.5}>
			<View style={screenHeight>screenWidth?styles.ResendButtonView:styles.ResendButtonViewLand}>
				<Text style={styles.ButtonText}>Next</Text>
			</View>
			</TouchableOpacity>
		</View>
		</View>
		{/*End Next Button Area */}

		{/*Start Request Pin Area */}
		<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{paddingVertical:'25%',flexDirection:'row',}}>
				<View style={{width:35}}>
					<View style={styles.firstCircle}/>

					<View style={{width:25,alignItems:'center'}}>
						<View style={styles.VerticalLine}/>
					</View>
					<View style={{width:25,alignItems:'center'}}>
						<View style={styles.secondCircle}/>
					</View>

					<View style={{width:25,alignItems:'center'}}>
						<View style={styles.VerticalLine}/>
					</View>
					<View style={{width:25,alignItems:'center'}}>
						<View style={styles.secondCircle}/>
					</View>
				</View>
				<View style={styles.TextButtonView}>
					<View>
						<Text style={[styles.textStyle,{color:'#000'}]}>
						Request Pin</Text>
						<View style={{height:38,}}/>
						<Text style={[styles.textStyle,{fontSize:14}]}>
						Enter Pin</Text>
						<View style={{height:38,}}/>
						<Text style={[styles.textStyle,{fontSize:14}]}>
						Set Password</Text>
					</View>
				</View>
			</View>
		</View>
		{/*End Request Pin Area */}

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
InputView:{
	width:'85%',
	paddingVertical:'2%',
},
textInput:{
	borderWidth:1,
	paddingVertical:'3%',
	borderColor:'#5a48e5',
	paddingHorizontal:10,
	color:'#fff',
	borderRadius:10,
	fontSize:15,
},
ResendButtonView:{
	borderWidth:1,
	borderRadius:10,
	borderColor:'#5a48e5',
	paddingVertical:'3%',
	paddingHorizontal:'8%',
},
ResendButtonViewLand:{
	borderWidth:1,
	borderRadius:10,
	borderColor:'#5a48e5',
	paddingVertical:'3%',
	paddingHorizontal:'8%',
	backgroundColor:'#2c14de',
},
ButtonText:{
	color:'#fff',
	fontSize:15,
},
firstCircle:{
	height:25,
	width:25,
	borderRadius:15,
	borderWidth:1,
	borderColor:'#2c14de',
	backgroundColor:'#fff',
},
VerticalLine:{
	height:35,
	backgroundColor:'#d4d2d5',
	width:1,
	overflow:'hidden',
},
secondCircle:{
	height:20,
	width:20,
	borderRadius:15,
	borderWidth:1,
	borderColor:'#d4d2d5',
	backgroundColor:'#d4d2d5',
},
textStyle:{
	fontSize:16,
	color:'#60606b',
},
});

export default ChangePasswordScreen;