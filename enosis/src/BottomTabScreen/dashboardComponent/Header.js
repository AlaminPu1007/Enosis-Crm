import React, {Component,useState} from 'react';
import {
  View, 
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';

export default class Header extends Component{

///material menu start
_menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  ///
	render(){
		return(
			 <View style={{alignItems:'center',}}>
				<View style={styles.headerArea}>
					<View style={styles.NavIconView}>
						<Feather name="menu" size={25} color="#fff"
							style={{paddingVertical:5,paddingHorizontal:12}}
							onPress={()=>{this.props.navigation.openDrawer()}}
						/>
					</View>
					<View>
						<Text style={styles.TextStyle}>{this.props.title}</Text>
					</View>

					<View>
					<View style={styles.MaterialMenuView}>
              <Menu
                ref={this.setMenuRef}
                button={
                  <MaterialCommunityIcons name="google-translate" size={25} color="#fff"
				          style={{paddingVertical:5,paddingHorizontal:12}}
				          onPress={this.showMenu}
				        />
                }
              >
                <MenuItem onPress={()=>{this.hideMenu(),
                	this.props.SelectedLanguage('english'.toLowerCase())}}
                >
                 English
                </MenuItem>

                <MenuItem onPress={()=>{this.hideMenu(),
                	this.props.SelectedLanguage('chinese'.toLowerCase())}}
                >
                Chinese</MenuItem>
                
              </Menu>
            </View>

					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerArea:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-between',
		paddingVertical:'1%',
	},
	TextStyle:{
		fontSize:17,
		paddingVertical:5,
		color:'#fff',
	},
});
