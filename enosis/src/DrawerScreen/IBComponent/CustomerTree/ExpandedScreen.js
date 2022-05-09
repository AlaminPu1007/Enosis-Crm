import React, {Component,useState} from 'react';
import {
  View, 
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
///material menu
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';



export default class ExpandedScreen extends Component{

   state={
    isSelected:false,
    isChecked:false,
    modalVisible:false,
  }

  onPress=()=>{
  this.setState((prevState , prevProps)=>({
    isSelected: !prevState.isSelected
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

    const {item,navigation}=this.props;
    return(
    	<View>
    	<ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.ExpandedView}>

        <View style={styles.ValueView}>
        	<Text style={styles.ValueTextView}>{item.value}</Text>
        </View>

       <View style={styles.ValueView}>
        	<Text style={styles.ValueTextView}>{item.value}</Text>
       </View>

       <View style={styles.ValueView}>
        	<Text style={styles.ValueTextView}>{item.value}</Text>
       </View>

       <View style={styles.ValueView}>
        	<Text style={styles.ValueTextView}>{item.value}</Text>
       </View>

       <View style={styles.ValueView}>
        	<Text style={styles.ValueTextView}>{item.value}</Text>
       </View>

        <View style={styles.ValueView}>
        <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonView}>
        	<Menu
            ref={this.setMenuRef}
            button={
              <Entypo name="dots-three-horizontal" size={20}
               color='#b9b9b9'
               style={{paddingHorizontal:8,
                paddingVertical:6
               }}
               onPress={this.showMenu}
             />
            }
          >
            <MenuItem onPress={this.hideMenu}>
             Details
            </MenuItem>
            <MenuItem onPress={this.hideMenu}>Delete</MenuItem>
            
          </Menu>
         </View>
         </TouchableOpacity>
        </View>

      </View>
     	</ScrollView>
     	</View>
    );
  }



  render(){

    const {item,navigation}=this.props;
    
    return(
      <View style={styles.StaticTimeDataView}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.bodyView}>

          	<View style={{flexDirection:'row',}}> 
          		<View>
          		{
	              this.state.isSelected ?
	              <AntDesign name="down" size={18} color='#b9b9b9'
	               style={{marginTop:3,paddingHorizontal:3,paddingVertical:5}}
	              />:
	              <AntDesign name="right" size={18} color='#b9b9b9'
	                 style={{marginTop:3,paddingHorizontal:3,paddingVertical:5}}
	              />
            	}
          		</View>
          		<View>
          			<Text style={styles.titleTextStyle}>{item.name}</Text>
          		</View>
          	</View>


          	{/*Start Modal Open Live Accounts */}
          
          <View style={{flex:1,}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
            >
            <TouchableOpacity 
            style={styles.modalButtonView}
            onPress={()=>{
              this.setState({modalVisible:!this.state.modalVisible})}}
            >
            <TouchableWithoutFeedback >
            <View style={{width:'90%'}}>
              <ScrollView showsVerticalScrollIndicator={false}>
              <View>
              <View style={styles.modalInitialView}>
              {/*start button View*/}
                <View style={styles.styleButtonView}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={[styles.ButtonView,{borderTopWidth:1,borderTopColor:'#e1e1e1',}]}>
                    <Text style={styles.ButtonTextView}>Total Commission</Text>
                  </View>
                </TouchableOpacity>
                </View>
               {/*End button View*/}
               {/*start button View*/}
                <View style={styles.styleButtonView}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.ButtonView}>
                    <Text style={styles.ButtonTextView}>Direct Clients</Text>
                  </View>
                </TouchableOpacity>
                </View>
               {/*End button View*/}
               {/*start button View*/}
                <View style={styles.styleButtonView}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.ButtonView}>
                    <Text style={styles.ButtonTextView}>Direct Investments</Text>
                  </View>
                </TouchableOpacity>
                </View>
               {/*End button View*/}
               {/*start button View*/}
                <View style={styles.styleButtonView}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.ButtonView}>
                    <Text style={styles.ButtonTextView}>Total Clients</Text>
                  </View>
                </TouchableOpacity>
                </View>
               {/*End button View*/}
               {/*start button View*/}
                <View style={styles.styleButtonView}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.ButtonView}>
                    <Text style={styles.ButtonTextView}>Total Investments</Text>
                  </View>
                </TouchableOpacity>
                </View>
               {/*End button View*/}


               {/*Start Cancel button View*/}
              <View style={{alignItems:'center',paddingTop:'8%'}}> 
                <TouchableOpacity activeOpacity={0.5}
                  onPress={()=>{
                   this.setState({modalVisible:!this.state.modalVisible})}}
                >
                  <View style={styles.cancelButtonView}>
                    <Text style={styles.cancelButtonViewText}>
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/*End Cancel button View*/}
              </View>
              </View>
              </ScrollView>
            </View>
           </TouchableWithoutFeedback>
            </TouchableOpacity>
            </Modal>
          </View>
        {/*End Modal Open Live Accounts */}


          	<TouchableOpacity activeOpacity={0.5}
          		onPress={()=>{
                this.setState({modalVisible:!this.state.modalVisible})}}
          	>
          	<View style={styles.iconStyle}>
          		<AntDesign name="plus" 
          			size={20} color='#fff'
          		/>
          	</View>
            </TouchableOpacity>
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
    paddingHorizontal:'2%',
  },
  bodyView:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	paddingVertical:'3%',
  	borderBottomWidth:1,
    borderBottomColor:'#ececec',
  },
  titleTextStyle:{
  	fontSize:15,
  	color:'#9f9f9f',
  	padding:5,
  },
  iconStyle:{
  	borderRadius:15,
  	backgroundColor:'#2c14de',
  	padding:5,
  	justifyContent:'center',
  },
  ExpandedView:{
  	justifyContent:'space-between',
  	flexDirection:'row',
  	backgroundColor:'#f5f5f5',
  },
  ValueView:{  	
  	justifyContent:'center',
  	paddingHorizontal:10,
  },
  ValueTextView:{
  	fontSize:14,
  	color:'#9f9f9f',
  	textAlign:'center',
  	paddingHorizontal:'3%',
  	paddingHorizontal:'6%',
  },
   modelView:{
    width:'90%',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    borderColor:'#000',
    borderColor:'#9b9898',
  },
  modelText:{
    fontSize:16,
    color:'red',
    fontWeight:'bold',
  },
  modalButtonView:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingVertical:'10%',
  },             
  modalInitialView:{
     borderWidth:1,
     paddingVertical:'15%',
     borderColor:'#e1e1e1',
     borderRadius:40,
  },
  styleButtonView:{
  },
  ButtonView:{
    alignItems:'center',
    paddingVertical:'5%',
    borderBottomWidth:1,
    borderBottomColor:'#e1e1e1',
  },
  ButtonTextView:{
    fontSize:16,
    textAlign:'center',
  },
  cancelButtonView:{
    alignItems:'center',
    paddingVertical:'4%',
    paddingHorizontal:'13%',
    borderRadius:15,
    backgroundColor:'#f07d7d',
  },
  cancelButtonViewText:{
    fontSize:17,
    color:'#fff',
  },
});
