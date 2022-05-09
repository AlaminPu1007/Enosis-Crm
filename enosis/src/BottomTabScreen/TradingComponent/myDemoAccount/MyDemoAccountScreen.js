import React,{Component,useState,useEffect} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ScrollView,
	Animated,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import {Context as AuthContext} from '../context/AuthContext';
import CheckBox from 'react-native-check-box';
import ExpandedScreen from './ExpandedScreen';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';



let CONTENT = [
  {
    id:1,
    title: '12 Mar,2020 21:07',
    checked:false,
    acNo: '2100096555 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:2,
    title: '13 Mar,2020 21:07',
    checked:false,
    acNo: '2100096556 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:3,
    title: '14 Mar,2020 21:07',
    checked:false,
    acNo: '2100096557 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:4,
    title: '15 Mar,2020 21:07',
    checked:false,
    acNo: '2100096558 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:5,
    title: '16 Mar,2020 21:07',
    checked:false,
    acNo: '2100096559 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:6,
    title: '17 Mar,2020 21:07',
    checked:false,
    acNo: '2100096560 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:7,
    title: '18 Mar,2020 21:07',
    checked:false,
    acNo: '2100096561 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:8,
    title: '19 Mar,2020 21:07',
    checked:false,
    acNo: '2100096562 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:9,
    title: '20 Mar,2020 21:07',
    checked:false,
    acNo: '2100096563 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:10,
    title: '18 Mar,2020 21:07',
    checked:false,
    acNo: '2100096564 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
  {
    id:11,
    title: '12 Mar,2020 21:07',
    checked:false,
    acNo: '2100096565 (TGFX-B1)',
    balance: '1 | 2999.59 | 2999.59',
  },
];

let rowSize=[
  {
    Rowvalue:'5',
    id:1,
  },
  {
    Rowvalue:'10',
    id:2,
  }
];


const MyDemoAccountScreen =({navigation})=>{

  const [array , setArray]=useState(CONTENT);
  const [copyArray , setcopyArray]=useState(CONTENT);
  const [isChecked , setIsChecked]=useState(false);
  const [value , setValue]=useState('');
  const [showValue , setShowValue]=useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  ///pagination useState
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage , setPostPerPage]=useState(5);
  

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = array.slice(indexOfFirstPost,indexOfLastPost);

  
///start pagination screen here

const totalPosts = array.length;
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
    pageNumbers.push(i);
  }
 const [pageLength,setPagelength] = useState(pageNumbers.length);


useEffect(()=>{
  setPagelength(pageNumbers.length)
},[pageNumbers.length])
  

const pagination =()=>{


  const CounterFunction=(type)=>{
    setPagelength(pageNumbers.length)
    if(type==='Increase'){

      if(currentPage>=1&&currentPage<pageNumbers.length){
        
        return(
          setCurrentPage(currentPage+1)
        );
      }

    }else if(type==='decrease'){
      
      if(currentPage>1&&currentPage<=pageNumbers.length){
        return(
          setCurrentPage(currentPage-1)
        );
      }
    }
  }

  return(
   <View style={{flexDirection:'row'}}>
    <View>
      <TouchableOpacity activeOpacity={0.5}
      onPress={()=>{CounterFunction('decrease')}} >
        <AntDesign name="left" size={18} color='#fff' 
        style={{paddingVertical:7,paddingHorizontal:10}}/>
      </TouchableOpacity>
    </View>
    
    <View>
      <TouchableOpacity activeOpacity={0.5}
      onPress={()=>{CounterFunction('Increase')}} >
        <AntDesign name="right" size={18} color='#fff' 
        style={{paddingVertical:7,paddingHorizontal:10}}/>
      </TouchableOpacity>
    </View>

   </View>
  );
}
///end pagination screen here


const renderItem=(item)=><ExpandedScreen navigation={navigation} item={item}/>;

  const onChangeText=(text)=>{
    return(
      setValue(text),
      setArray(copyArray.filter(some=>some.title.toLowerCase().includes(text.toLowerCase())))
    );
  };

  const CheckBoxClick=()=>{

    return(
      setIsChecked(!isChecked)
    );
}

		
		return(
			<View style={styles.container}> 
			<View style={styles.myLiveAccountView}>


				{/*start search box here*/}
        <View style={{width:'95%'}}>
          <View style={styles.searchView}>

            <View style={{paddingBottom:15}}>
              <Text style={{color:'#fff',marginLeft:10,fontSize:18}}>
              MY DEMO ACCOUNTS</Text>
            </View>

            {/*Rows per page*/}
            <View style={styles.RowsPerPage}>

              <View style={{flexDirection:'row',width:'50%'}}>
                <Text style={{color:'#fff',paddingHorizontal:10,fontSize:16,paddingVertical:5}}> 
                Rows Per Page </Text>
                
                {showValue?
                <View >
                  {rowSize.map(item=>{
                    return(
                      <View key={item.id}>
                      <TouchableOpacity activeOpacity={0.5}
                      onPress={()=>{
                        setPostPerPage(item.Rowvalue),setShowValue(!showValue)
                      }}>
                        <Text style={{color:'#fff',paddingHorizontal:10,paddingVertical:5,
                        fontSize:16,height:35,width:45,
                      }}>
                        {item.Rowvalue}
                        </Text>
                      </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>
                :
                <Text style={{color:'#fff',paddingHorizontal:10,fontSize:16,
                borderBottomWidth:1,height:25,borderBottomColor:'#51aef8',
                height:35,width:45,paddingVertical:5,
              }}>
                {postPerPage}</Text>
              }
              
                <AntDesign name="down" size={18} color='#b9b9b9' 
                  onPress={()=>{setShowValue(!showValue)}}
                  style={{paddingHorizontal:10,marginTop:2,paddingVertical:5}}
                />
              </View>

              <View style={{width:'50%',flexDirection:'row',
              justifyContent:'flex-end',
            }}>

              <View>
                <Text style={{color:'#fff',paddingHorizontal:10,
                paddingVertical:5,fontSize:16,}}>
                {currentPage} of {pageLength}</Text>
              </View>
                
                <View>
                  {pagination()}
                </View>

              </View>

            </View>

            <View style={styles.searchBoxView}> 

              <View style={styles.IconView}>
                <AntDesign name='search1' size={22} color="white" />
              </View>

              <View style={styles.InputView}>
                <TextInput   
                  value={value}
                  style={{height:30,paddingVertical:0,color:'white'}}
                  onChangeText={text=>onChangeText(text)}
                  placeholder="Search"
                  placeholderTextColor="#d5d5d5"
                />
            </View>

            </View>

          </View>
         </View>
        {/*End search box here*/}


        <View style={styles.myLiveDetailsView}>
          {/*start myLiveBOx here*/}
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

        {/*Start Open Live Accounts */}

        {/*Start Modal Open Live Accounts */}
          
          <View style={{flex:1,}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
            <TouchableOpacity 
            style={{flex:1,justifyContent:'center',alignItems:'center'}}
            onPress={()=>{setModalVisible(!modalVisible)}}
            >
            <TouchableWithoutFeedback>
            <View style={styles.modelView}>
              
                <Text style={styles.modelText}>
                  Modal screen!
                </Text>

            </View>
           </TouchableWithoutFeedback>
            </TouchableOpacity>
            </Modal>
          </View>
        {/*End Modal Open Live Accounts */}

        <View style={styles.openLiveAccountView}>
          <View style={styles.openLiveButton}>

          <View  style={styles.buttonView}>

            <TouchableOpacity onPress={()=>{setModalVisible(
              !modalVisible
              )}}>
              <Text style={styles.openLiveButtonText}>
               Open Demo Account
              </Text>
            </TouchableOpacity>
          </View>

          </View>
        </View>
        {/*End Open Live Accounts */}

       </View>
			</View>
		
		);
}

export default MyDemoAccountScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	myLiveAccountView:{
    width:'100%',
    alignItems:'center',
  },
   searchBoxView:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#5a47e8',
    backgroundColor:'#5a47e8',
    paddingHorizontal:15,
    overflow:'hidden',
    paddingVertical:2,
  },
  InputView:{
    width:'100%',
  },
  searchView:{
    paddingTop:'5%',
    paddingBottom:'13%'
  },
   myLiveDetailsView:{
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
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
    marginTop:-20,
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

  RowsPerPage:{
    paddingVertical:5,
    height:80,
    flexDirection:'row',
  },
  openLiveAccountView:{
    backgroundColor:'#fff',
    width:'100%',
    paddingVertical:'8%',
    alignItems:'center',
  },
  openLiveButton:{
    width:'95%',
  },
  buttonView:{
    width:'55%',
    borderWidth:1,
    backgroundColor:'#fcfcfd',
    borderColor:'#ddd',
    borderRadius:10,
  },
  openLiveButtonText:{
    fontSize:16,
    textAlign:'center',
    color:'#2c14de',
    paddingVertical:12,
    paddingHorizontal:15,
  },
   modelView:{
    backgroundColor:'#ddd',
    height:'25%',
    width:'80%',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  modelText:{
    fontSize:16,
    color:'red',
    fontWeight:'bold',
  },
});


