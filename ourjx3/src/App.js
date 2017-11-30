import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyImage from './MyImage.js';
import Friends from './friends.js'
import {Switch,Route, Link} from 'react-router-dom';
import Black from './component/black.js';
import Red from './component/red.js';
import Xiaobai from './friends/xiaobai.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
          </ul>
          
          </div>
          </Switch>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="小白是欧皇.." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
      
    );
  }
}
class Login extends Component{
  render(){
    return(
      <div>
        
         
          <div  className="dropdown">
            <button  className="col-md-12" data-toggle="dropdown">
              <b>Login</b> <span className="caret"></span>
            </button>
              <ul id="login-dp" className="dropdown-menu">
                <li>
                   <div className="row">
                    <div className="col-md-12">
                      Login via
                      <div className="social-buttons">
                        <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                        <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                      </div>
                      or
                      <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                            <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> keep me logged-in
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="bottom text-center">
                      New here ? <a href="#"><b>Join Us</b></a>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        
      </div>
    );
  }
}
export default App;
