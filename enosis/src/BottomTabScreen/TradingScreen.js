import React,{Component,useContext,useState} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Header from '../component/Header';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MyLiveAccountsScreen from './TradingComponent/myLiveAccount/MyLiveAccountsScreen';
import MyDemoAccountScreen from './TradingComponent/myDemoAccount/MyDemoAccountScreen';
import MyTradeHistoryScreen from './TradingComponent/TradeHistory/MyTradeHistoryScreen';


const TradingScreen=({navigation})=>{
	
	const { state:{language},SelectedLanguage } = useContext(AuthContext);
  const [isShow , setisShow] =useState(false);


	return(
		<SafeAreaView style={{flex:1,backgroundColor:'#2c14de'}}>
		<ScrollView showsVerticalScrollIndicator={false}>
		<View style={{flex:1}}>
		{/*start header View*/}
			<View>
				<Header 
					navigation={navigation} 
					SelectedLanguage={SelectedLanguage}
					title="Trading"
				/>
			</View>
		{/*End header View*/}
		{/*Start MyLiveAccountsScreen*/}
			<View>
				<MyLiveAccountsScreen navigation={navigation}/>
			</View>
		{/*End MyLiveAccountsScreen*/}
		{/*Start MyDemoAccountScreen*/}
			<View>
				<MyDemoAccountScreen navigation={navigation}/>
			</View>
		{/*End MyDemoAccountScreen*/}
		{/*Start MyDemoAccountScreen*/}
			<View>
				<MyTradeHistoryScreen navigation={navigation}/>
			</View>
		{/*End MyDemoAccountScreen*/}
		</View>
		</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default TradingScreen;