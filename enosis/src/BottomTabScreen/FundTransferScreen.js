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
import DepositFunds from './FundTransferComponent/DepositFunds/DepositFunds';
import InternalTransfer from './FundTransferComponent/InternalTransfer/InternalTransfer';
import WithDrawFunds from './FundTransferComponent/WithDrawFunds/WithDrawFunds';
import TransactionHistory from './FundTransferComponent/TransactionHistory/TransactionHistory';

const FundTransferScreen=({navigation})=>{
	
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
					title="Fund Transfer"
				/>
			</View>
		{/*End header View*/}
		{/*Start DepositFunds*/}
			<View>
				<DepositFunds navigation={navigation} />
			</View>
		{/*End DepositFunds*/}
		{/*Start InternalTransfer*/}
			<View>
				<InternalTransfer navigation={navigation} />
			</View>
		{/*End InternalTransfer*/}
		{/*Start WithDrawFunds*/}
			<View>
				<WithDrawFunds navigation={navigation} />
			</View>
		{/*End WithDrawFunds*/}
		{/*Start TransactionHistory*/}
			<View>
				<TransactionHistory navigation={navigation} />
			</View>
		{/*End TransactionHistory*/}
		</View>
		</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default FundTransferScreen;