import React, { Component } from 'react';
import logo from './banner.jpeg';
import './App.css';
import MyImage from './MyImage.js';
import Friends from './friends.js'
import {Switch,Route, Link} from 'react-router-dom';
import Black from './component/black.js';
import Red from './component/red.js';
import Recipes from './component/recipes.js';
import Posts from './component/posts.js';
import Xiaobai from './friends/friendInfo.js';
import Register from './component/register.js'
import Login from './component/login'
import PersonInfo from './friends/person'
import UpdateInfo from './friends/updateInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="banner" alt="logo" />
        </header>
          
          <div className="col-sm-2">
            <div className="row">
               <SideBar/>
            </div>
            <Login className="Login"/>
          </div>   
          
            <div className="col-sm-10">
              <Switch >
              <Route exact path="/" component={Home}/>
              <Route path='/friends/:number' component={Xiaobai}/>
              <Route path="/black" component={Black} />
              <Route path="/red" component={Red} />
              <Route path="/meals" component={Recipes} />
              <Route path="/posts" component={Posts} />
              <Route path="/register" component={Register} />
              <Route path="/info/updateInfo" component={UpdateInfo}/>
              <Route path="/info/:id" component={PersonInfo} />
              
              <Route component={Notfound} />
              </Switch>
            </div>
            
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
  
  render(){
    return(
      <div className="csidenav">
      <h4>非酋集中营</h4>
        
        <Switch>
        <div>
          <ul className="nav nav-pills nav-stacked">

            <li ><Link to="/">主页</Link></li>
            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#section2">黑鬼们 
            <span className="caret"></span></a>
              <Friends />
            </li>
            <li><Link to="/black">谁去黑本</Link></li>
            <li><Link to="/red">欧皇时刻</Link></li>
            <li><Link to="/meals">今天吃啥</Link></li>
            <li><Link to="/posts">有啥说啥</Link></li>

          </ul>
          
          </div>
          </Switch>
        {/*<div className="input-group">
          <input type="text" className="form-control" placeholder="小白是欧皇.." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>*/}
      </div>
      
    );
  }
}

export default App;
