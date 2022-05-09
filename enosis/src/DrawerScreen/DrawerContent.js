import React ,{Component,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

  import {  SafeAreaView } from 'react-native-safe-area-context';
  import  AntDesign  from 'react-native-vector-icons/AntDesign';
  import  Ionicons  from 'react-native-vector-icons/Ionicons';
  import  Feather  from 'react-native-vector-icons/Feather';
  import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
  import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
  import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
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


export function DrawerContent({props,navigation}){

	const {state:{language},LogOut} = useContext(AuthContext);

	return (
    <DrawerContentScrollView {...props}>

      <View syle={{flex:1,}}>
      <View style={styles.container}>

      		{/*search box start here*/}

      <View style={styles.SearchBox}>
      <View style={styles.boxView}>
      	<View style={styles.IconView}>
      		<AntDesign name='search1' size={22} color="white" />
      	</View>

      	<View style={styles.InputView}>
      		<TextInput	 
      			style={{height:30,paddingVertical:0,color:'white'}}
      			placeholder="Search"
						placeholderTextColor="#fff"
      		/>
      	</View>
      </View>
      </View>

      {/*drawer navigation start here*/}

      <View style={{width:'80%',overflow:'hidden'}}>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}} >
      	<View style={styles.rootView}>
      		<View style={styles.iconView}> 
		      	<AntDesign name='home' size={20}  color="white"/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.dashboard',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>
      
      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#ff6d80'}]}> 
		      	<MaterialCommunityIcons name='account' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.profile',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Trading')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#8f75ff'}]}> 
		      	<AntDesign name='linechart' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.trading',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Fund Transfer')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#f299cc'}]}>  
		      	<Feather name='dollar-sign' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.fundTransfer',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Ticket')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#7bed7b'}]}> 
		      	<FontAwesome name='ticket' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.ticket',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('Live Support')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#ffbd0b'}]}>  
		      	<SimpleLineIcons name='earphones-alt' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.liveSupport',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('FAQs')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#ff6d80'}]}>  
		      	<AntDesign name='question' size={20}  color="white"
		      	
		      	/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.faqs',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

      <View style={styles.mainView}>
      	<TouchableOpacity onPress={()=>{navigation.navigate('IB')}} >
      	<View style={styles.rootView}>
      		<View style={[styles.iconView,{backgroundColor:'#8f75ff'}]}>  
		      	<Feather name='percent' size={20}  color="white"/>
		      </View>
		      <View style={styles.textView}> 
		      		<Text style={styles.TextStyle}> {I18n.t('DrawerContentScreen.ib',{locale:language})} </Text>
		      </View>  
      	</View>
      	</TouchableOpacity>
      </View>

    			{/* Log out work here	*/}
    	<View style={styles.logoutView}>
      	<TouchableOpacity 
      		onPress={()=>{LogOut()}}
      	activeOpacity={0.6}>
      	<View style={styles.innerView}>
      		<AntDesign name='poweroff' size={23}  color="#ed46a0"
      			style={{fontWeight:'bold',padding:5}}
      		/>
      		<Text style={{color:'#ed46a0',fontWeight:'bold',padding:5,fontSize:16
      		}}>{I18n.t('DrawerContentScreen.logOut',{locale:language})}</Text>
      	</View>
      	</TouchableOpacity>
      </View>


      </View>
      </View>
      </View>
      
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		backgroundColor:'#f9f8fd',
	},
	SearchBox:{
		backgroundColor:'#2c13dd',
		width:'100%',
		alignItems:'center',
		paddingVertical:20,
	},
	boxView:{
		width:'90%',
		flexDirection:'row',
		alignItems:'center',
		borderRadius:50,
		borderWidth:1,
		borderColor:'#5a47e8',
		backgroundColor:'#5a47e8',
		paddingHorizontal:15,
		overflow:'hidden',
		paddingVertical:2,
	},
	InputView:{
		width:'100%',
	},
	rootView:{
		flexDirection:'row',
		paddingVertical:5,
	},
	iconView:{
		padding:5,
		borderRadius:50,
		backgroundColor:'#ffbd0b',
	},
	textView:{
		width:'100%',
	  borderBottomWidth:1,
	  borderBottomColor:'#e1e1e1',
		paddingTop:5,
		marginLeft:15,
	},
	TextStyle:{
		fontSize:16,
	},
	mainView:{
		paddingVertical:5
	},
	logoutView:{
		height:'100%',
		width:'100%',
		paddingVertical:15,
		alignItems:'center',
	},
	innerView:{

		width:'50%',
		alignItems:'center',
	  padding:'5%',
	 	paddingHorizontal:'4%',
		borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor:'#fefafc',
    overflow:'hidden',
    flexDirection:'row',
    paddingVertical:'3%',
	},
});
