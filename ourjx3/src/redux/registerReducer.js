import axios from "axios"
const initialState={
	id:'',
	pwd:'',
	repwd:'',
	groupid:'',
	isAuth: false,
	msg:''
}

export function regReducer(state=initialState,action){
	switch(action.type){
		case 'Register_Success' :return {...state, isAuth:true, ...action.payload}
		case 'Register_Failed' : return {...state, isAuth:false, msg:action.msg}
		default: return state;
	}
}
function regSuccess(data){
	return {type: 'Register_Success', payload:data}
}
function regFailed(msg){
	return {type: 'Register_Failed', msg}
}
export function register({id,name,pwd,repwd,groupid}){
	if(!id||!pwd){
		return regFailed("id, pwd can not be empty");
	}
	if(pwd!==repwd){
		return regFailed("two passwords must be same");
	}
	if(groupid!=582614384){
		return regFailed("incorrect groupid!");
	}
	return insert=>axios.post('/users/register',{id,pwd})
	.then(res=>{

		if(res.data.code==0) {
			axios.post('/info',{id})
			return insert(regSuccess({id,pwd}))
		}
		else return insert(regFailed(res.data.msg));
	})
}