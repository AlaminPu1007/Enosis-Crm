import React,{Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
}from 'react-native';

const InformationScreen=()=>{
	return(
		<View style={{alignItems:'center',paddingTop:'3%',paddingBottom:'6%',
			backgroundColor:'#fff',
		}}>

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={styles.iconStyle}>
							<View style={styles.makeIcon}/>
						</View>
						<Text style={styles.IconTextStyle}>Name</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>Green Lantern</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#ff6262'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#ff6262'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>Email</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>Green Lantern</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#51aef8'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#51aef8'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>Country</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>Afghanistan</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#ffa762'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#ffa762'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>State</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>N/A</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#6962ff'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#6962ff'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>City</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>N/A</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={styles.iconStyle}>
							<View style={styles.makeIcon}/>
						</View>
						<Text style={styles.IconTextStyle}>Address</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>N/A</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#ff6262'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#ff6262'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>Zip Code</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>N/A</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#51aef8'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#51aef8'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>Mobile</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>+93256874</Text>
					</View>
				</View>
				{/*starttable data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#ffa762'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#ffa762'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>Date of Birth</Text>
					</View>

					<View style={styles.textView}>
						<Text style={styles.IconTextStyle}>1988-01-02</Text>
					</View>
				</View>
				{/*starttable data */}

			</View>
	);
};

const styles = StyleSheet.create({
	tableDataView:{
 		width:'80%',
 		flexDirection:'row',
 		paddingVertical:'3%',
 	},
 	IconView:{
 		flexDirection:'row',
 		width:'45%',
 	},
 	textView:{
 		width:'55%',
 	},
 	makeIcon:{
 		height:16,
 		width:16,
 		backgroundColor:'#26d232',
 		borderRadius:5,
 	},
 	iconStyle:{
 		borderWidth:2,
 		padding:3,
 		borderRadius:8,
 		borderColor:'#26d232',
 		justifyContent:'center',
 	},
 	IconTextStyle:{
 		paddingHorizontal:15,
 		fontSize:16,
 		textAlign:'left'
 	},
});

export default InformationScreen;