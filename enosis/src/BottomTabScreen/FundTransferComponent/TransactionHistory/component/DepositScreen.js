import React,{Component,useState} from 'react';
import CheckBox from 'react-native-check-box';
import {Text,
View,
StyleSheet
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import ExpandedScreen from '../ExpandedScreen';

const DepositScreen=({currentPosts,navigation})=>{

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
          <View style={styles.myLiveBOx}>

            <View style={styles.timeCheckBox}>
            <View style={{flexDirection:'row',width:'100%'}}>
              <CheckBox
                style={{paddingHorizontal:5,marginTop:-2}}
                onClick={()=>{
                 CheckBoxClick()
                }}
                isChecked={isChecked}
             />
             <Text style={{color:'#9f9f9f',paddingHorizontal:5,}}>Time</Text>
             <AntDesign name="arrowup" size={15} color='#b9b9b9'
              style={{marginTop:3,paddingHorizontal:5}}
             />
             </View>
            </View>

          {/* start static data View*/}
          <View style={styles.StaticTimeDataView}>
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
          {/* end static data View*/}

          {/*end myLiveBOx here*/}
          </View>

      {/*end myLiveDetailsView here*/}
        </View>
		</View>
	);
}

export default DepositScreen;

const styles = StyleSheet.create({
	  myLiveDetailsView:{
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    paddingBottom:'15%',
  },
   myLiveBOx:{
    width:'95%',
    paddingVertical:'5%',
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
    marginTop:-30,
  },

  timeCheckBox:{
    flexDirection:'row',
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
  },
  StaticTimeDataView:{
    width:'100%',
  },
});