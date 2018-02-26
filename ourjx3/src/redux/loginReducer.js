import axios from 'axios'
const initState={
	logged: false,
	msg: ''
}
export function login({id,pwd}){
	if(!id||!pwd) return loginFailed("user or password cannot be empty")
	return dispatch=>axios.get('/users/'+id)
	.then(res=>{
		console.log(res.data)
		if(res.data===null) return dispatch(loginFailed("id or password is incorrect!"))
		if(res.data.code===0) return dispatch(loginSuccess())
		return dispatch(loginFailed('id or password is incorrect!'))
	})
}
export function logout(){
	return logOut()
}
function loginSuccess(){
	return {type:'Login_Success'}
}
function loginFailed(msg){
	return {type:'Login_Failed', msg}
}
function logOut(){
	return {type:'LogOut'}
}
export function loginReducer(state=initState,action){
	switch(action.type){
		case 'Login_Success': return{...state, logged:true}
		case 'Login_Failed' : return{...state, logged:false, msg:action.msg}
		case 'LogOut': return{...state, logged:false}
		default:return state
	}
}
