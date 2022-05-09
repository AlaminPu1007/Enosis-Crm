import React, {Component,useState} from 'react';
import {
  View, 
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  Feather  from 'react-native-vector-icons/Feather';
///material menu
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


export default class ExpandedScreen extends Component{

   state={
    isSelected:false,
    isChecked:false,
  }

  onPress=()=>{
  this.setState((prevState , prevProps)=>({
    isSelected: !prevState.isSelected
  }))
}

CheckBoxClick=()=>{
  this.setState((prevState)=>({
    isChecked: !prevState.isChecked
  }))
}

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



///expanded work here
  renderDetail=()=>{

    const {item}=this.props;
    return(
      <View style={styles.ExpandedView}>

          <View style={styles.mainView}>

            <View style={styles.ExpandEnableFirst}>

              <Text style={styles.TextStyle}>Transfer Methos: </Text>
              <Text style={styles.TextStyle}>{item.transferMethos} </Text>
              
            </View>

            <View style={styles.DotView}>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={17}
                  color='#bcbcbc' style={styles.dotIconStyle} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainView}>

          <View style={styles.accountNoView}>
            <Text style={styles.TextStyle}>Currency: </Text>
            <Text style={styles.TextStyle}>{item.currency}</Text>
          </View>

          <View style={styles.DotView}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={17}
                color='#bcbcbc' style={styles.dotIconStyle} />
            </TouchableOpacity>
          </View>

          </View>

          <View style={styles.mainView}>

          <View style={styles.BalanceView}>
            <Text style={styles.TextStyle}>Fees/Commissions(%):</Text>
            <Text style={{color:'#9f9f9f',paddingVertical:6}}>{item.commission}</Text>
          </View>

          <View style={styles.DotView}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={17}
                color='#bcbcbc' style={styles.dotIconStyle}/>
            </TouchableOpacity>
          </View>

          </View>

          <View style={styles.mainView}>

          <View style={styles.BalanceView}>
            <Text style={styles.TextStyle}>Fees/Commissions(%):</Text>
            <Text style={{color:'#9f9f9f',paddingVertical:6}}>{item.commissionDay}</Text>
          </View>

          <View style={styles.DotView}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={17}
                color='#bcbcbc' style={styles.dotIconStyle}/>
            </TouchableOpacity>
          </View>
          
          </View>

          <View style={styles.mainView}>
            <View style={styles.BalanceView}>
              <View style={styles.actionButtonView}>
                <TouchableOpacity onPress={()=>{alert('you click on action')}}>
                  <Text style={styles.ButtonText}> Action </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.DetailsButtonView}>
                <TouchableOpacity onPress={()=>{alert('you click on Internal Transfer')}}>
                  <Text style={styles.ButtonText}> Internal Transfer </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.DotView}>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={17}
                color='#bcbcbc' style={[styles.dotIconStyle,{marginTop:1}]} />
            </TouchableOpacity>
          </View>
          </View>

      </View>
    );
  }



  render(){

    const {item,navigation}=this.props;
    
    return(
      <View style={styles.StaticTimeDataView}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.MainTitleView}>
            <View style={styles.FirstTitleView}>

            {
              this.state.isSelected ?
              <AntDesign name="down" size={14} color='#b9b9b9'
               style={{marginTop:3,paddingHorizontal:3}}
              />:
              <AntDesign name="right" size={14} color='#b9b9b9'
                 style={{marginTop:3,paddingHorizontal:3}}
              />
            }

              <CheckBox
                style={{paddingHorizontal:3,marginTop:-2,}}
                isChecked={
                  this.state.isChecked
                }
                onClick={()=>{
                  this.CheckBoxClick()
                }}
             />

              <Text style={styles.headerText}>{item.title}</Text>

            </View>

            <View style={styles.SecondTitleView}>
              <Menu
                ref={this.setMenuRef}
                button={
                  <Entypo name="dots-three-horizontal" size={17}
                   color='#b9b9b9'
                   style={{paddingHorizontal:8,
                    paddingVertical:6
                   }}
                   onPress={this.showMenu}
                 />
                }
              >
                <MenuItem onPress={()=>{this.hideMenu(),
                  navigation.navigate('Profile',{id:item.id})
                }}>
                 Details
                </MenuItem>
                <MenuItem onPress={this.hideMenu}>Delete</MenuItem>
                
              </Menu>
            </View>
            
          </View>
        </TouchableWithoutFeedback>
        {this.state.isSelected && this.renderDetail()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  StaticTimeDataView:{
    width:'100%',
  },
   MainTitleView:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
    paddingVertical:10,
    paddingHorizontal:5,
  },

  FirstTitleView:{
    flexDirection:'row',
    width:'90%',
    paddingVertical:8,
  },
  SecondTitleView:{
    paddingVertical:8,
    width:'10%',
    alignItems:'center',
  },
    headerText: {
    fontSize: 14,
    color:'#b9b9b9',
    paddingHorizontal:3
  },

  ///render content
  ExpandedView:{
    backgroundColor: '#f5f5f5',
  },
  mainView:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
    paddingVertical:12,
  },
  ExpandEnableFirst:{
    flexDirection:'row',
    width:'85%',
  },
  DotView:{
    width:'15%',
    alignItems:'flex-end',
  },
  TextStyle:{
    color:'#9f9f9f',
    paddingHorizontal:10,
    paddingVertical:4,
  },
  accountNoView:{
    flexDirection:'row',
    width:'85%',
  },
  BalanceView:{
    flexDirection:'row',
    width:'85%',
  },
  ButtonText:{
    paddingVertical:5,
    paddingHorizontal:12,
    borderWidth:1,
    borderColor:'#d4d4d4',
    marginHorizontal:6,
    borderRadius:5,
    color:'#9f9f9f',
  },
   dotIconStyle:{
    paddingVertical:6,
    paddingHorizontal:10,
    marginTop:2
  },
});
