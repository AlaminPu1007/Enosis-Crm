import React ,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

const AcVsPlScreen=()=>{
	return(
		<View style={styles.container}>
		<View style={styles.mainView}>

			<View style={styles.showTrades}>
				<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.innerView}>
					<View style={styles.iconView}>
						<MaterialIcons name="local-grocery-store" size={25} color="#fff"/>
					</View>

					<View style={styles.textView}>
						<Text style={styles.textStyle}>Close Orders 50</Text>
					</View>

					<View style={styles.valueView}>
						<Text style={styles.textStyle}>Total Volume : 226</Text>
					</View>
				</View>
				</TouchableOpacity>
			</View>

			<View style={styles.showTrades}>
				<TouchableOpacity activeOpacity={0.5}>
				<View style={[styles.innerView,{backgroundColor:'#1abc9c'}]}>
					<View style={styles.iconView}>
						<MaterialIcons name="local-grocery-store" size={25} color="#fff"/>
					</View>

					<View style={styles.textView}>
						<Text style={styles.textStyle}>Close Orders 50</Text>
					</View>

					<View style={styles.valueView}>
						<Text style={styles.textStyle}>Total Volume : 226</Text>
					</View>
				</View>
				</TouchableOpacity>
			</View>

			<View style={styles.showTrades}>
				<TouchableOpacity activeOpacity={0.5}>
				<View style={[styles.innerView,{backgroundColor:'#3498db'}]}>
					<View style={styles.iconView}>
						<MaterialIcons name="local-grocery-store" size={25} color="#fff"/>
					</View>

					<View style={styles.textView}>
						<Text style={styles.textStyle}>Close Orders 50</Text>
					</View>

					<View style={styles.valueView}>
						<Text style={styles.textStyle}>Total Volume : 226</Text>
					</View>
				</View>
				</TouchableOpacity>
			</View>

			<View style={styles.showTrades}>
				<TouchableOpacity activeOpacity={0.5}>
				<View style={[styles.innerView,{backgroundColor:'#7a3afd'}]}>
					<View style={styles.iconView}>
						<MaterialIcons name="local-grocery-store" size={25} color="#fff"/>
					</View>

					<View style={styles.textView}>
						<Text style={styles.textStyle}>Close Orders 50</Text>
					</View>

					<View style={styles.valueView}>
						<Text style={styles.textStyle}>Total Volume : 226</Text>
					</View>
				</View>
				</TouchableOpacity>
			</View>

		</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		width:'100%',
		alignItems:'center',
		flex:1,
	},
	mainView:{
		width:'90%',
	},
	showTrades:{
		width:'100%',
		paddingVertical:8,
	},
	iconView:{
		width:'10%',
	},
	textView:{
		width:'45%',
	},
	valueView:{
		width:'45%',
		alignItems:'flex-end',
	},
	innerView:{
		flexDirection:'row',
		backgroundColor:'#f84d62',
		paddingVertical:8,
		paddingHorizontal:10,
		borderRadius:8,
		alignItems:'center',
	},
	textStyle:{
		color:'white',
		fontSize:16,
		fontWeight:'bold'
	},
});

export default AcVsPlScreen;