ExpandedScreen
import React,{useState} from 'react';
import {
	View, 
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const ExpandedScreen=({navigation,item})=>{

	const [isSelected,setIsselected]=useState(false);

const onPress=()=>{
  setIsselected(!isSelected)
}

const renderDetail=()=>{
	return(
		<View style={{paddingHorizontal:'2%'}}>
			<Text style={{color:'#737274',fontSize:15,}} selectable>
			{item.value}</Text>
		</View>
	);
}

	return(
		<View style={{flex:1,alignItems:'center',}}>
		<View style={styles.Container}>
		<TouchableWithoutFeedback onPress={onPress}>
		<View style={{paddingVertical:'2%'}}>
		<View style={styles.bodyView}>
			<View style={styles.titleView}>
				<Text style={styles.titleViewText} selectable>{item.title}</Text>
			</View>

			<View style={styles.IconView}>
			{
        isSelected ?
        <AntDesign name="down" size={14} color='#777777'/>
        :
        <AntDesign name="right" size={14} color='#777777'/>
      }
			</View>
		</View>
		</View>
		</TouchableWithoutFeedback>
		{isSelected && renderDetail()}
		</View>
		</View>
	);
}

const styles = StyleSheet.create({
	Container:{
		width:'95%',
	},
	titleView:{
		paddingVertical:'2%',
		paddingLeft:'2%',
		width:'90%',
	},
	titleViewText:{
		fontSize:16,
		color:'#777777',
	},
	IconView:{
		width:'10%',
		alignItems:'center',
		justifyContent:'center',
	},
bodyView:{
	paddingVertical:'2%',
	flexDirection:'row',
	width:'100%',
	borderWidth:1,
	backgroundColor:'#fff',
	borderRadius:8,
	borderColor:'#ddd',
},
});
export default ExpandedScreen;