import createDataContext from './createDataContext';

const reducer =(state , action)=>{

			switch(action.type){
				case 'select_language':
					return {...state, language: action.payload};
				case 'LogIn':
					return {...state,token:action.payload};
				default:
					return state;
			}
};

const SelectedLanguage=(dispatch)=>{

	return(Language)=>{
		// console.log(Language);
		if(Language==='english'){
			dispatch({type:'select_language',payload:'english'});
		}else if(Language==='chinese'){
			dispatch({type:'select_language',payload:'chinese'});
		}
	};

};

const SignIn=(dispatch)=>{

	return()=>{
		dispatch({type:'LogIn',payload:1})
	};

};

const LogOut=(dispatch)=>{

	return()=>{
		dispatch({type:'LogIn',payload:null})
	};

};


export const {Context , Provider} = createDataContext(
	reducer,
	{SelectedLanguage,SignIn,LogOut},
	{token:null,language:'english'}
);