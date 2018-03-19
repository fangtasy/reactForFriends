import axios from 'axios'

const initState={
	id: '',
	nickname: '',
	avatar:'',
	cname: '',
	menpai: '',
	achievement: '',
	qiyu: [],
	zhuangfen: '',
	geqian: '',
	tag:[]
}

export function showReducer(state=initState,action){
	switch(action.type){
		case 'show_succeed': return {...state,...action.payload};
		case 'Logoff_succeed': return {...initState};
		default: return state;

	}
	
}
export function logoff(){
	return logOff()
}
function logOff(){
	return {type:'Logoff_succeed'}
}
function showSuccess(data){
	return{type:'show_succeed', payload:data}
}
export function getInfo(id){
	//console.log("id here",id);
	return dispatch=>axios.get('/info/person')
	.then(res=>{
		//console.log(res.data)
		return dispatch(showSuccess(res.data));
	})
}
export function getFriendInfo(id){
	//console.log("id here",id);
	return dispatch=>axios.get('/info/'+id)
	.then(res=>{
		//console.log(res.data)
		return dispatch(showSuccess(res.data));
	})
}
export function infoReducer(state=initState,action){
	switch(action.type){
		case 'update_succeed': return {...state, ...action.payload};
		case 'update_failed': return {...state, msg:action.msg};
		default: return state;
	}
}

function updateSuccess(data){
	return{type:'update_succeed',payload:data}
}
function updateFail(msg){
	return{type:'update_failed',msg}
}

export function updateInfo({id,nickname,cname,menpai,achievement,zhuangfen,geqian}){
	console.log('updateinof',id,achievement)
	return dispatch=>axios.put('/info/updateInfo/'+id,{nickname,cname,menpai,achievement,zhuangfen,geqian})
	.then(res=>{
		console.log(res.data)
		return dispatch(updateSuccess({nickname,cname,menpai,achievement,zhuangfen,geqian}));
	})
}
