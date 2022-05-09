import React,{Component,useContext} from 'react';
import {
	View,
Text,
TouchableOpacity
} from 'react-native';
import { SafeAreaProvider, SafeAreaView }
 from 'react-native-safe-area-context';

 /// vector icon 
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  Feather  from 'react-native-vector-icons/Feather';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

///navigation staff

 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';

// AuthenticationScreen staff
import SignInScreen from './AuthScreen/SignInScreen';
import SignUpScreen from './AuthScreen/SignUpScreen';
import ForgotScreen from './AuthScreen/ForgotScreen';

import {Context as AuthContext} from './context/AuthContext';

///Bottom Tabs Screen
import DashboardScreen from './BottomTabScreen/DashboardScreen';
import FundTransferScreen from './BottomTabScreen/FundTransferScreen';
import ProfileScreen from './BottomTabScreen/ProfileScreen';
import TicketScreen from './BottomTabScreen/TicketScreen';
import TradingScreen from './BottomTabScreen/TradingScreen';

///Drawer Screen
import FaqsScreen from './DrawerScreen/FaqsScreen';
import IBScreen from './DrawerScreen/IBScreen';
import LiveSupportScreen from './DrawerScreen/LiveSupportScreen';
///drawerContent
import { DrawerContent } from './DrawerScreen/DrawerContent';
// AuthenticationScreen staff
import ChangePasswordScreen from './BottomTabScreen/ProfileComponent/component/ChangePasswordScreen';
import ProfileVerificationScreen from './BottomTabScreen/ProfileComponent/component/ProfileVerificationScreen';

///start localization
import I18n from 'react-native-i18n';
import english from './i18n/english';
import chinese from './i18n/chinese';


I18n.fallbacks = true;
I18n.translations = {
  english,
  chinese
};

///end localization

 const AuthStack = createStackNavigator();
 const ProfileStack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 const Tab2 = createBottomTabNavigator();
 const Drawer = createDrawerNavigator();


const ProfileStacks=()=>{
  return(
    <SafeAreaProvider>
    <ProfileStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Change-password" component={ChangePasswordScreen} />
      <ProfileStack.Screen name="Profile-verification" component={ProfileVerificationScreen} />
    </ProfileStack.Navigator>
    </SafeAreaProvider>
  );
};


const MyTabs=()=> {

const {state:{language}} = useContext(AuthContext);

  return (
    <SafeAreaProvider>
    <Tab.Navigator 
      tabBarOptions={{ 
        activeTintColor:"#513de4",
        inactiveTintColor:'#8a8c99',
        style:{borderTopRightRadius: 10,
            borderTopLeftRadius: 10,},
         labelPosition:'below-icon',
         keyboardHidesTabBar :true,
      }}
    >

      <Tab.Screen name={I18n.t('DrawerContentScreen.dashboard',{locale:language})} component={DashboardScreen} 
        options={{
          tabBarIcon:({color,size}) => 
          (<AntDesign name="home" size={size} color={color} />),
        }}
      />
      <Tab.Screen name={I18n.t('DrawerContentScreen.profile',{locale:language})} component={ProfileStacks} 
        options={{
          tabBarIcon:({color,size}) => 
          (<MaterialCommunityIcons name='account' size={size} color={color} />),
        }}
      />
      <Tab.Screen name={I18n.t('DrawerContentScreen.trading',{locale:language})} component={TradingScreen} 
        options={{
          tabBarIcon:({color,size}) => 
          (<AntDesign name='linechart' size={size} color={color} />),
        }}
      />
      <Tab.Screen name={I18n.t('DrawerContentScreen.fundTransfer',{locale:language})} component={FundTransferScreen} 
        options={{
          tabBarIcon:({color,size}) => 
          (<Feather name='dollar-sign' size={size} color={color} />),
        }}
      />
      <Tab.Screen name={I18n.t('DrawerContentScreen.ticket',{locale:language})} component={TicketScreen} 
        options={{
          tabBarIcon:({color,size}) => 
          (<FontAwesome name='ticket' size={size} color={color} />),
        }}
      />
      
    </Tab.Navigator>
    </SafeAreaProvider>
  );
};



//drawerContent={props=><DrawerContent {...props} />}

 const MyDrawer=()=> {

  return (
  	<SafeAreaProvider>

    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />} >
      <Drawer.Screen name="Dashboard" component={MyTabs} />
      <Drawer.Screen name="Trading" component={TradingScreen} />
      <Drawer.Screen name="FAQs" component={FaqsScreen} />
      <Drawer.Screen name="Live Support" component={LiveSupportScreen} />
      <Drawer.Screen name="IB" component={IBScreen} />
    </Drawer.Navigator>

    </SafeAreaProvider>
  );
};








const AuthenticationScreen = () => {
	return(
		<SafeAreaProvider>
			<AuthStack.Navigator
				screenOptions={{
					headerShown:false
				}}
				//initialRouteName="Forgot"
			>
				<AuthStack.Screen name="SignIn" component={SignInScreen} />
				<AuthStack.Screen name="SignUp" component={SignUpScreen} />
				<AuthStack.Screen name="Forgot" component={ForgotScreen} />
			</AuthStack.Navigator>
		</SafeAreaProvider>
	);
}

export default ({navigation})=>{

	const {state:{token}} = useContext(AuthContext);

	return(
		<NavigationContainer>
			{!token ? <AuthenticationScreen/> : <MyDrawer/>  }
		</NavigationContainer>
	);
};