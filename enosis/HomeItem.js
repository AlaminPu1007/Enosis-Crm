import React from 'react';
 
import { View, Text,
  TouchableOpacity ,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

class HomeItem extends React.Component {

  state={
    isSelected:false
  }

  renderDetail=()=>{
  	const {item}=this.props;
    return(
      <View>
        <Text>{item.description}</Text>
      </View>
    );
  }
onPress=()=>{
  this.setState((prevState , prevProps)=>({
    isSelected: !prevState.isSelected
  }))
}

 
  render() {
  	const {item}=this.props;
    return(
      <View>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={{flexDirection:'row',padding:5}}>
            <Text style={{flex:1,}}>{item.name}</Text>
            <AntDesign name="down" size={14} color='#b9b9b9'
               style={{marginTop:3,paddingHorizontal:3}}
            />
          </View>
        </TouchableWithoutFeedback>
        {this.state.isSelected && this.renderDetail()}
      </View>
    );
  }
}

export default HomeItem;