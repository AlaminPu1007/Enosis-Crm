import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';

const ExpandedScreen =()=>{
	return(
		<View style={styles.expandedView}>
                
                <View>
                <View style={styles.enableView}>
                  <View style={{flexDirection:'row',width:'90%',}}>
                     <Text style={{fontSize:14,color:'#acacac',paddingLeft:20,paddingRight:35}}>
                       Enable:
                     </Text>
                     <Feather name="check-circle" size={15} color="#69e17a" 
                      style={{marginTop:3,}}
                     />
                   </View>

                   <View style={{width:'10%',alignItems:'center'}}>
                    <Entypo name="dots-three-horizontal" size={15} color='#b9b9b9'/>
                   </View>
                </View> 

                 <View style={styles.enableView}>
                  <View style={{flexDirection:'row',width:'90%',}}>
                     <Text style={{fontSize:14,color:'#acacac',paddingLeft:20,paddingRight:35}}>
                       AC/No:
                     </Text>
                     <Text style={{fontSize:14,color:'#acacac',paddingLeft:20,paddingRight:35}}>
                       2100096555 (TGFX-B1)
                     </Text>
                   </View>

                   <View style={{width:'10%',alignItems:'center'}}>
                    <Entypo name="dots-three-horizontal" size={15} color='#b9b9b9'/>
                   </View>
                </View> 


                 <View style={styles.enableView}>
                  <View style={{flexDirection:'row',width:'90%',}}>
                     <Text style={{fontSize:14,color:'#acacac',paddingLeft:20,
                     // paddingRight:
                   }}>
                       Leverage | Balance | Equity:
                     </Text>

                     <Text style={{fontSize:14,color:'#acacac', }}>
                       1 | 2999.59 | 2999.59
                     </Text>
                   </View>

                   <View style={{width:'10%',alignItems:'center'}}>
                    <Entypo name="dots-three-horizontal" size={15} color='#b9b9b9'/>
                   </View>
                </View>



                <View style={styles.enableView}>
                  <View style={{flexDirection:'row',width:'90%',}}>
                  <TouchableOpacity onPress={()=>{alert('you click on action')}}>
                     <Text style={{fontSize:14,color:'#acacac',paddingHorizontal:20,
                     // paddingRight:
                   }}>
                       Action
                     </Text>
                     </TouchableOpacity>

                     <TouchableOpacity onPress={()=>{alert('you click on deails')}}>
                     <Text style={{fontSize:14,color:'#acacac',marginLeft:10 ,}}>
                       Details
                     </Text>
                     </TouchableOpacity>
                   </View>

                   <View style={{width:'10%',alignItems:'center'}}>
                    <Entypo name="dots-three-horizontal" size={15} color='#b9b9b9'/>
                   </View>
                </View>

                </View>


              </View>
	);
};

const styles = StyleSheet.create({
	
	 enableView:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#b9b9b9',
    paddingVertical:10,
    backgroundColor:'#f5f5f5',

  },
});

export default ExpandedScreen;