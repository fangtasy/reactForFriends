import React, { Component } from 'react';
import logo from './banner.jpeg';
import './App.css';
import MyImage from './MyImage.js';
import {Switch,Route, Link} from 'react-router-dom';
import Black from './component/black.js';
import Red from './component/red.js';
import Recipes from './component/recipes.js';
import Posts from './component/posts.js';
import FriendInfo from './friends/friendInfo.js';
import Xiaobai from './friends/xiaobai.js';
import Register from './component/register.js'
import Login from './component/login'
import PersonInfo from './friends/person'
import UpdateInfo from './friends/updateInfo'
import { Layout, Menu, Icon, Button} from 'antd';
import axios from 'axios'
import  'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <header className="App-header">
          <img src={logo} className="banner" alt="logo" />
        </header>
      
        
       <Content >
        <Layout>
        <SideBar /> 
        <Content style={{ margin: '0 16px',minHeight:480 }}>
          <Switch >
              <Route exact path="/" component={Home}/>
              <Route path='/friends/:number' component={FriendInfo} />
              
              <Route path="/black" component={Black} />
              <Route path="/red" component={Red} />
              <Route path="/meals" component={Recipes} />
              <Route path="/posts" component={Posts} />
              <Route path="/register" component={Register} />
              <Route path="/info/updateInfo/:id" component={UpdateInfo}/>
              <Route path="/info/:id" component={PersonInfo} />
              
              <Route component={Notfound} />
              </Switch>
          </Content>
        </Layout>
      </Content>
     
      <Footer style={{ textAlign: 'center' }}>
        小白是欧皇 ©2018 Created by jx
      </Footer>
    
  </Layout>
        
            
      </div>
    );
  }
}
class Home extends Component{
  render(){
    return (
      <div >  
          <MainFrame />
          <br/>  
          <MyImage className="col-sm-10"/>
         
      </div>  
    );
  }
}
class MainFrame extends Component{
    
  render(){
    return(
      <div >
        <ul className="col-sm-6" id="qiyu">
          <li><a href="http://www.yayaquanzhidao.top/SelectPet.html?ID=18">宠物奇遇</a></li>
          <li><a href="http://jx3.derzh.com/serendipity">其他奇遇</a></li>
        </ul>
        <ul className="col-sm-6" id="qiyu">
          <li><a href="http://www.jx3pve.com/">剑三pve</a></li>
          <li><a href="http://www.j3pz.com">配装器</a></li>
        </ul>
        {/*<iframe className="col-md-12" src="jx3.derzh.com/serendipity/" name="qiyu"></iframe>*/}
        
      </div>


    );
  }
}
class Notfound extends Component{
  render(){
  return (
    <div>
      <h2>Not Found 404</h2>
    </div>
  );
}
}
class SideBar extends Component{
  constructor(props){
    super(props);
    this.state={
      friends:[]
    }
  }
  componentDidMount() {
    axios.get('/info')
      .then(res => {
        this.setState({friends: res.data})
        //console.log(this.state.friends);
      });
    }
  render(){
    return(
         
          <Sider
          breakpoint="lg"
          collapsedWidth="0"
          
        >
     <h4 className="header" >非酋集中营</h4>
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1">
          <Link to="/"><Icon type="pie-chart" />
          <span className="nav-text">主页</span></Link>
        </Menu.Item>
        <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>黑鬼们</span></span>}
            >{this.state.friends.map((friends)=><Menu.Item  key={friends.id}> <Link to={"/friends/"+friends.id}><span className="nav-text">{friends.nickname}</span></Link></Menu.Item>)}
              
            </SubMenu>
        <Menu.Item key="2">
          <Link to="/black"><Icon type="team" />
         <span className="nav-text">谁去黑本</span></Link>
        </Menu.Item>
        <Menu.Item key="3">
           <Link to="/red"><Icon type="file" />
         <span className="nav-text">欧皇时刻</span></Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/meals"><Icon type="file" />
          <span className="nav-text">今天吃啥</span></Link>
        </Menu.Item>

        <Menu.Item key="4">
           <Link to="/posts"><Icon type="user" />
         <span className="nav-text">有啥说啥</span></Link>
        </Menu.Item>
      </Menu>
      <Login className="Login"/>
    </Sider>
      
      
    );
  }
}

export default App;
