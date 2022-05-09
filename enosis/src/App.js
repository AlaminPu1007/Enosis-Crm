import React,{Component} from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import AuthenticationScreen from './AuthenticationScreen';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Header from './component/Header';
import {Provider as AuthProvider} from './context/AuthContext';

///ingnore all warning 
console.disableYellowBox = true;

class App extends Component{
	render(){
		return(
			<AuthenticationScreen/>
		);
	}
}

export default () =>{
	return(
		<AuthProvider>
			<App/>
		</AuthProvider>
	);
};