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
    title: 'Transfer Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'USD',
    commission:'5',
    commissionDay:'4/5 Working Days',
  },
  {
    id:2,
    title: 'Transfer Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'Bd',
    commission:'50',
    commissionDay:'2/3 Working Days',
  },
   {
    id:3,
    title: 'Transfer Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'URO',
    commission:'20',
    commissionDay:'3/4 Working Days',
  },
  {
    id:4,
    title: 'Transfer Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'USD',
    commission:'100',
    commissionDay:'1/2 Working Days',
  },
  {
    id:5,
    title: 'Devech Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'USD',
    commission:'5',
    commissionDay:'4/5 Working Days',
  },
  {
    id:6,
    title: 'Transfer Methos',
    transferMethos:'Debit / Credit Cards',
    currency:'Bd',
    commission:'50',
    commissionDay:'2/3 Working Days',
  },
   {
    id:7,
    title: 'Test Transfer',
    transferMethos:'Debit / Credit Cards',
    currency:'URO',
    commission:'20',
    commissionDay:'3/4 Working Days',
  },
  {
    id:8,
    title: 'Help Methods',
    transferMethos:'Debit / Credit Cards',
    currency:'USD',
    commission:'100',
    commissionDay:'1/2 Working Days',
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

const InternalTransfer=({navigation})=>{

  const [array , setArray]=useState(CONTENT);
  const [copyArray , setcopyArray]=useState(CONTENT);
  const [isChecked , setIsChecked]=useState(false);
  const [value , setValue]=useState('');
  const [showValue , setShowValue]=useState(false);

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


		return(
			<View style={styles.container}> 
			<View style={styles.myLiveAccountView}>


				{/*start search box here*/}
        <View style={{width:'95%',}}>
          <View style={styles.searchView}>

            <View style={{paddingBottom:15,}}>
              <Text style={{color:'#fff',marginLeft:10,fontSize:18}}>
              INTERNAL TRANSFER</Text>
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


          </View>
         </View>
        {/*End search box here*/}


        <View style={styles.myLiveDetailsView}>
          {/*start myLiveBOx here*/}
            <View style={styles.myLiveBOx}>

              <View style={styles.timeCheckBox}>
              <View style={{flexDirection:'row',width:'100%',}}>

               <Text style={{paddingVertical:5,paddingHorizontal:15}}>
                INTERNAL TRANSFER
               </Text>

               </View>
              </View>

            {/* start static data View*/}
            <View style={styles.StaticTimeDataView}>

            <View>
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

            </View>
            {/* end static data View*/}


            {/*end myLiveBOx here*/}
            </View>

        {/*end myLiveDetailsView here*/}
          </View>


       </View>
			</View>
		
		);
}

export default InternalTransfer;

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	myLiveAccountView:{
    paddingVertical:10,
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
    paddingBottom:'15%',
  },
  myLiveBOx:{
    width:'95%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop:-50,
    backgroundColor:'#dcf0f7',
  },
  timeCheckBox:{
    flexDirection:'row',
    paddingTop:12,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#ececec',
  },

  StaticTimeDataView:{
    width:'100%',
    paddingVertical:'3%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'#fff'
  },

  RowsPerPage:{
    paddingVertical:5,
    height:80,
    flexDirection:'row',
  },
});


