import React ,{Component,useEffect,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Linking,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import Header from '../component/Header';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import {Context as AuthContext} from '../context/AuthContext';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LiveSupportScreen=({navigation})=>{

	const { state:{language},SelectedLanguage } = useContext(AuthContext);
	const [screenHeight , setscreenHeight]=useState(WIDTH);
	const [screenWidth , setscreenWidth]=useState(HEIGHT);

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
		<Image source={require('./image/Profile-verify.jpg')} 
			style={styles.imageBackgroundStyle} 
		/>
		<View style={{flex:1}}>

		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex:1}}>

			{/*start Header Area */}
			<View>
				<Header
					navigation={navigation}
					title="Live Support"
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


			<View style={{alignItems:'center',justifyContent:'center',
				marginTop:HEIGHT*0.3
			}}>

			<View style={styles.firstView}>
				{/*Start liveSupportButtonView Area */}
				<View >
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{alert('Live chat is not available right now')}}
					>
						<View style={styles.liveSupportButtonView}>
							<AntDesign
								name="message1" size={30} color="#6856e8"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>LIVE CHAT</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}

				{/*Start liveSupportButtonView Area */}
				<View style={{paddingHorizontal:'2%'}}>
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{Linking.openURL('tel:+123456789')}}
					>
						<View style={styles.liveSupportButtonView}>
							<SimpleLineIcons
								name="call-in" size={30} color="#f68a8a"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>CALL BACK</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}

				{/*Start liveSupportButtonView Area */}
				<View >
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{
							Linking.openURL('https://www.facebook.com')
						}}
					>
						<View style={styles.liveSupportButtonView}>
							<FontAwesome5
								name="facebook-messenger" size={30} color="#798fe2"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>FACEBOOK</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}
			</View>



			<View style={styles.firstView}>
				{/*Start liveSupportButtonView Area */}
				<View >
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{
							Linking.openURL('https://www.viber.com')
						}}
					>
						<View style={[styles.liveSupportButtonView,{paddingHorizontal:'9%'}]}>
							<FontAwesome5
								name="viber" size={30} color="#b461cd"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>VIBER</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}

				{/*Start liveSupportButtonView Area */}
				<View style={{paddingHorizontal:'2%'}}>
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{
							Linking.openURL('https://www.telegram.com')
						}}
					>
						<View style={styles.liveSupportButtonView}>
							<FontAwesome5
								name="telegram-plane" size={30} color="#37A6F7"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>TELEGRAM</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}

				{/*Start liveSupportButtonView Area */}
				<View >
					<TouchableOpacity activeOpacity={0.5}
						onPress={()=>{
							Linking.openURL('https://www.whatsapp.com')
						}}
					>
						<View style={[styles.liveSupportButtonView,{paddingHorizontal:'4%'}]}>
							<FontAwesome5
								name="whatsapp" size={30} color="#4ac959"
								style={{paddingVertical:'3%',}}
							/>
							<Text style={styles.buttonText}>WHATSAPP</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*End liveSupportButtonView Area */}
			</View>

		</View>

		</View>
		</ScrollView>

		</View>
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
firstView:{
	flexDirection:'row',
	overflow:'hidden',
	paddingVertical:'5%',
},
SecondView:{
	flexDirection:'row',
	overflow:'hidden',
},
buttonText:{
	fontSize:15,
	paddingVertical:'2%'
},
liveSupportButtonView:{
	backgroundColor:'#fff',
	borderWidth:1,
	borderColor:'#ddd',
	paddingVertical:'15%',
	paddingHorizontal:'5%',
	borderRadius:25,
	alignItems:'center',
},
});

export default LiveSupportScreen;