import React, {Component} from 'react'
import {login,logout} from '../redux/loginReducer'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom';
import './login.css'
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      id:'',
      pwd:''
    };
    this.handleClick=this.handleClick.bind(this)
    this.handleLogout=this.handleLogout.bind(this)
  }
  handleChange(key,e){
    this.setState({[key]:e.target.value})
  }
  handleClick(e){
    //console.log(this.props)
    e.preventDefault()
    this.props.login(this.state)
    this.props.history.push("/")
   // console.log(this.props)
  }
  handleLogout(){
    this.props.logout()
  }
  render(){
    if(this.props.loginStatus.loginReducer.logged==true)
      return(<button onClick={this.handleLogout}>Log out</button>)
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
                      
                      <form className="form" role="form"  acceptCharset="UTF-8" id="login-nav">
                      <b className="avatar">此处应该有图片 {this.props.loginStatus.loginReducer.msg}</b>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">用户名</label>
                            <input className="form-control" id="exampleInputEmail2" placeholder="User Name" required onChange={e=>this.handleChange('id',e)} />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required onChange={e=>this.handleChange('pwd',e)} />
                            <div className="help-block text-right"><Link to='/register'> 注册</Link></div>
                        </div>
                        <div className="form-group">
                            
                            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>Sign in</button>
                        </div>
                        
                      </form>
                    </div>  
                  </div>
              </li>
            </ul>
          </div>     
      </div>
    );
  }
}
const mapStatetoProps=(state)=>{
  return {loginStatus: state}
}
const actionCreators={login,logout}
Login=connect(mapStatetoProps,actionCreators)(Login)
export default withRouter(Login)