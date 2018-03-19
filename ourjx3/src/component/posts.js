import React, {Component} from 'react';
import axios from 'axios'
import {Table, Button,Input,Modal} from 'antd'
import cookies from 'browser-cookies'
import './posts.css'
const { TextArea } = Input;
class Posts extends Component{
	constructor(props){
		super(props);
		this.state={
      id:'',
      name:'',
      title:'',
      content:'',
      date: '',
			posts:[],
      visible:false,
      mtitle:'',
      text:''
		}
    this.handleClick=this.handleClick.bind(this)
	}
  showModal(e){
    this.setState({
      visible: true,
      text:e.content,
      mtitle:e.title
    });
    console.log(e.content)
  }
  handleOk = (e) => {
   
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
	componentDidMount() {
    	axios.get('/posts')
          .then(res => {
      	    this.setState({posts: res.data})
      	//console.log(this.state.friends);
        });
      if(cookies.get('userid')){axios.get('/info/person')
      .then(res=>{
        this.setState({id: res.data.id, name:res.data.nickname,date:new Date()})
      })}
      
  	}
    delete(_id,id){
      if(id!=cookies.get('userid')) return null
      axios.delete('/posts/'+_id)
        .then((result) => {
        }).catch(function (error) {
            console.log(error);
        });
      axios.get('/posts')
          .then(res => {
          this.setState({posts: res.data})
        })
          .catch(function (error) {
            console.log(error);
        });
    }
    handleChange(key,value){
      
      this.setState({[key]:value.target.value})
    }
    handleClick(){   

      axios.post('/posts',{id:this.state.id,name:this.state.name,title:this.state.title,content:this.state.content,date:new Date()})
      axios.get('/posts')
          .then(res => {
          this.setState({posts: res.data})
        })
    }
  	render(){
      if(!cookies.get('userid')) return <h2>请先登录</h2>
      const columns = [{
      title: 'Name',
      dataIndex: 'title',
      key: 'name',
      render: (text,record) => <div >
        <div >
          <a onClick={()=>this.showModal(record)}>{text}</a><span className='author'>{'--'+ record.name}
        
        <Button size='small' onClick={()=>this.delete(record._id,record.id)}>x</Button>
        </span>
        </div>
        <Modal
          title={this.state.mtitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.text}</p>
          
        </Modal>
      </div>,
    }];

  		return(
  			<div className='table'>
  			<h3>先别（biè）说话</h3>
  			<Table size={'small'} rowKey={(data)=>data._id} columns={columns} dataSource={this.state.posts}/>
        <Input placeholder='标题' onChange={(v)=>this.handleChange("title",v)} />
        <TextArea autosize={{ minRows: 2, maxRows: 8 }} onChange={(v)=>this.handleChange("content",v)} />
        <Button onClick={this.handleClick}>提交</Button>
        
     
  			</div>
  		);
  	}
}
export default Posts;