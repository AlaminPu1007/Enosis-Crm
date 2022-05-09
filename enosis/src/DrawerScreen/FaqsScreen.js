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
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import ExpandedScreen from './FaqComponent/ExpandedScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

let data=[
	{
		id:1,
		title:'What is Lorem Ispum?',
		value:"Lorem1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id:2,
		title:'Why do we use it?',
		value:"Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id:3,
		title:'Where can i get some?',
		value:"Lorem3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id:4,
		title:'Where does it Come From?',
		value:"Lorem4 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id:5,
		title:'The Standard Lorem Ispum Passage, Used since the 1500s',
		value:"Lorem5 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		id:6,
		title:'1914 transaction by H. Rackham',
		value:"Lorem5 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
];

const FaqsScreen=({navigation})=>{

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

const renderItem=(item)=><ExpandedScreen navigation={navigation} item={item}/>;


	return(
		<SafeAreaView style={{flex:1,}}>
		<View style={{flex:1,}} onLayout={ScreenChange}>
		<Image source={require('./image/Faq.jpg')} 
			style={styles.imageBackgroundStyle} 
			//resizeMode="stretch"
		/>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex:1}}>
			{/*start Header Area */}
			<View>
				<Header
					navigation={navigation}
					title="FAQS"
					SelectedLanguage={SelectedLanguage}
				/>
			</View>
		{/*End Header Area */}

		{/*start Question View Area */}
		<View style={screenHeight>screenWidth?styles.questionView:styles.questionViewLand}>
			<View style={styles.mainQuestionButtonView}>
				<View style={{paddingRight:8}}>
					<AntDesign name="question" size={22}
					color="#fff"
					style={styles.IconView}
					/>
				</View>
				<View style={{padding:6,}}>
					<Text style={{fontSize:15,color:'#414141'}}>
						FREQUENTLY ASKED QUESTIONS(FAQS)
					</Text>
				</View>
			</View>
		</View>
		{/*End Question View Area */}

		{/*start Body View Area */}
			<View style={{paddingVertical:'10%'}}>
				{
					data.map(item=>{
					 return(
	            <View key={item.id}>
	              {renderItem(item)}
	            </View>
          	);
					})
				}
			</View>
		{/*End Body View Area */}

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
questionView:{
	alignItems:'center',
	marginTop:HEIGHT*0.11,
},
questionViewLand:{
	alignItems:'center',
},
mainQuestionButtonView:{
	flexDirection:'row',
	backgroundColor:'#fff',
	padding:'3%',
	borderRadius:15,
	borderWidth:1,
	borderColor:'#ddd',
},
IconView:{
	backgroundColor:'#f545c6',
	padding:6,
	borderRadius:30,
},
});

export default FaqsScreen;