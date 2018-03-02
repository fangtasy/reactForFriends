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
	if(action.type==='show_succeed'){
		
		return {...state,...action.payload};
	}else return state;
	
}
function showSuccess(data){
	return{type:'show_succeed', payload:data}
}


export function infoReducer(state=initState,action){
	switch(action.type){
		case 'update_succeed': return {...state, ...action.payload};
		case 'update_failed': return {...state, msg:action.msg};
		default: return state;
	}
}
export function getInfo(id){
	//console.log("id here",id);
	return dispatch=>axios.get('/info/'+id)
	.then(res=>{
		//console.log(res.data)
		return dispatch(showSuccess(res.data));
	})
}
function updateSuccess(data){
	return{type:'update_succeed',payload:data}
}
function updateFail(msg){
	return{type:'update_failed',msg}
}

export function updateInfo({id,nickname,cname,achievement,qiyu,zhuangfen,geqian}){
	return dispatch=>axios.post('/info/'+id,{nickname,cname,achievement,qiyu,zhuangfen,geqian})
	.then(res=>{
		console.log(res.data)
		return dispatch(updateSuccess({nickname,cname,achievement,qiyu,zhuangfen,geqian}));
	})
}
