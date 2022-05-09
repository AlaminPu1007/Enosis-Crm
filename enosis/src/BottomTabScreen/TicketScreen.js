import React ,{Component,useState,useContext} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import Header from '../component/Header';
import {SafeAreaView } 
from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';
import MyTicketsScreen from './TicketComponent/MyTicketsScreen';

const TicketScreen=({navigation})=>{

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
					title="Tickets"
				/>
			</View>
			{/*End header View*/}
			<MyTicketsScreen navigation={navigation} />
		</View>
		</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TicketScreen;