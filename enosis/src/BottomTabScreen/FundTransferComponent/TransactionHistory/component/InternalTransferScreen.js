import React,{Component,useState} from 'react';
import CheckBox from 'react-native-check-box';
import {Text,
View,
StyleSheet
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import ExpandedScreen from '../ExpandedScreen';

const InternalTransferScreen=({currentPosts,navigation})=>{

 const [isChecked , setIsChecked]=useState(false);

const renderItem=(item)=><ExpandedScreen navigation={navigation} item={item}/>;
  const CheckBoxClick=()=>{

    return(
      setIsChecked(!isChecked)
    );
}


	return(
		<View>
		 <View style={styles.myLiveDetailsView}>
          {/*start myLiveBOx here*/}
            <View style={styles.myLiveBOx}>

              <View style={styles.timeCheckBox}>
              <View style={{flexDirection:'row',width:'100%',}}>

               <Text style={{paddingVertical:5,paddingHorizontal:15}}>
                INTERNAL TRANSFER
               </Text>

               </View>
              </View>

            {/* start static data View*/}
            <View style={styles.StaticTimeDataView}>

            <View>
             {
              currentPosts.map(item=>{
                return(
                  <View key={item.id}>
                    {renderItem(item)}
                  </View>
                );
              })
             }
             </View>

            </View>
            {/* end static data View*/}


            {/*end myLiveBOx here*/}
            </View>

        {/*end myLiveDetailsView here*/}
          </View>
		</View>
	);
}

export default InternalTransferScreen;

const styles = StyleSheet.create({
 myLiveDetailsView:{
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    paddingBottom:'15%',
  },
  myLiveBOx:{
    width:'95%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop:-50,
    backgroundColor:'#dcf0f7',
  },
  timeCheckBox:{
    flexDirection:'row',
    paddingTop:12,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
  },

  timeDetailsFirstView:{
    width:'90%',
  },

  StaticTimeDataView:{
    width:'100%',
    paddingVertical:'3%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'#fff'
  },


});