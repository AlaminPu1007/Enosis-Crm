import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

const ProfileVerification=()=>{
	return(
		<View style={{backgroundColor:'#fff',alignItems:'center',paddingTop:'2%',paddingBottom:'7%'}}>
			<View style={{width:'80%',}}>
				<View style={styles.TextStyleView}>
					<Text selectable style={styles.bodyTextStyle}>
					 Colour high-resolution scan copies or photos
					 of a document, which verifies your personality 
					 with full name, photo, signature, date of birth, 
					 expiration date are clearly seen and which is 
					 valid for at least 6 months from the moment 
					 of applying. Since We adhere to AML policy, 
					 each client has to pass verification procedure. 
					 Verified clients withdraw funds freely and deposit
				   trading accounts via all available methods. 
				   To verify your personality, please, 
				   upload photos or scan copies of one of the following documents:
					</Text>
				</View>

				{/*starttable data */}
				<View style={{alignItems:'center',paddingTop:'3%',paddingBottom:'6%'}}>
				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={styles.iconStyle}>
							<View style={styles.makeIcon}/>
						</View>
						<Text style={styles.IconTextStyle}>
						local pasport (ID, IC)</Text>
					</View>
				</View>
				{/*start table data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#ff6262'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#ff6262'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>
						international passport</Text>
					</View>
				</View>
				{/*start table data */}

				{/*starttable data */}
				<View style={styles.tableDataView}>
					<View style={styles.IconView}>
						<View style={[styles.iconStyle,{borderColor:'#51aef8'}]}>
							<View style={[styles.makeIcon,{backgroundColor:'#51aef8'}]}/>
						</View>
						<Text style={styles.IconTextStyle}>
						driver's license</Text>
					</View>
				</View>
				{/*start table data */}
				</View>
			{/*End table data */}

				<View style={styles.TextStyleView}>
					<Text selectable style={styles.bodyTextStyle}>
					 We accept only colour high-resolution photos
					 or scan copies of documents which should surely 
					 contain full name, photo, signature, date of birth, 
					 expiration date and be valid for at least 6 months 
					 from the moment of applying. The 4 edges of the 
					 document should be visible on the photo. We will 
					 check uploaded documents within 24 hours (except 
					 from weekends).
					 </Text>
				</View>
			</View>
		</View>
	);
}

const styles=StyleSheet.create({
bodyTextStyle:{
 	color:'#2e2e39',
 },
tableDataView:{
 		width:'100%',
 		flexDirection:'row',
 		paddingVertical:'2%',
 	},
 	IconView:{
 		flexDirection:'row',
 	},
 	makeIcon:{
 		height:11,
 		width:11,
 		backgroundColor:'#26d232',
 		borderRadius:3,
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
 		fontSize:14,
 		textAlign:'left',
 		color:'#2e2e39',
 	},
});
export default ProfileVerification;