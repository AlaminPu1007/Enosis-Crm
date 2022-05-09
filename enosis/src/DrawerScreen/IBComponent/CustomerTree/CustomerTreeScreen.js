import React,{Component,useState,useEffect} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
  FlatList,
} from 'react-native';

import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
//import {Context as AuthContext} from '../context/AuthContext';
import ExpandedScreen from './ExpandedScreen';

const Data=[
  {
    id:1,
    value:'Dummy Text',
    name:'Green Lantern(IB Code:1)(NON IB)'
  },
  {
    id:2,
    value:'Dummy Text',
    name:'Green Lantern(IB Code:1)(NON IB)'
  },
  {
    id:3,
    value:'Dummy Text',
    name:'Green Lantern(IB Code:1)(NON IB)'
  },
  {
    id:4,
    value:'Dummy Text',
    name:'Green Lantern(IB Code:1)(NON IB)'
  }
];

const CustomerTreeScreen =({navigation})=>{

  const renderItem=(item)=><ExpandedScreen navigation={navigation} item={item}/>;


		return(
    <View style={styles.container}> 
      {/*start Text Area*/}
      <View style={styles.myLiveAccountView}>
        <View style={styles.TextAreaView}>
          <Text style={styles.TextAreaTextStyle}>
            CUSTOMER TREE
          </Text>
        </View>
       </View>
       {/*End Text Area*/}

       {/*Start bodyView Area*/}
       <View style={{alignItems:'center',}}>
        <View style={styles.myLiveBOx}>
          {
              Data.map(item=>{
                return(
                  <View key={item.id}>
                    {renderItem(item)}
                  </View>
                );
              })
          }
        </View>
       </View>
       {/*End bodyView Area*/}

    </View>
		);
}

export default CustomerTreeScreen;

const styles = StyleSheet.create({
	container:{
    flex:1,
  },
  myLiveAccountView:{
    alignItems:'center', 
    backgroundColor:'#2c14de',
  },
  TextAreaView:{
    width:'85%',
    paddingBottom:'20%',
    paddingTop:'5%',
  },
  TextAreaTextStyle:{
    fontSize:18,
    color:'#fff',
  },
myLiveBOx:{
  width:'90%',
  paddingVertical:'2%',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#ddd',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
  backgroundColor:'white',
  overflow:'hidden',
  marginTop:'-12%',
},
   
});


