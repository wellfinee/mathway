import React from 'react';
import ReactDOM from 'react-dom';
import ObjectAct from './object.js'
import {Redirect} from 'react-router-dom'
import {setAdmins} from './../BLL/ActionCreator.js'
import * as axios from 'axios'
import {connectToLogin} from './../BLL/API.js'

import {cookies} from './../App.js'
import Cookies from 'universal-cookie';

class Login extends React.Component{
  state = {
    serverlogin: " ",
    serverpass: ' ',
    login: false,
    error: ' '
  }

SubmitLogin = () => {connectToLogin(this.state).then(p=>{
    if (p.data != 'noop'){
        cookies.set('pearson', {person: p.data.person, login: this.state.serverlogin}, {maxAge: "3600"});

        this.setState({
            login:  true
      })
    }
    else if (p.data === 'noop') {
      return(
        this.setState({
            error:  'error'
      })
      )
    }
  })
  }

setLogin = (e) => {
  this.setState({serverlogin: e.currentTarget.value})
}
setPassword = (e) => {
  this.setState({serverpass: e.currentTarget.value})

}
  render(){
if (this.state.login === true){
  return <Redirect to="/" />
}
    return(
<div class="wrapper fadeInDown">
  <div id="formContent">
    <h2 class="active"> Вход </h2>
      <input onBlur={this.setLogin} type="text" id="login" class="fadeIn second" name="login" placeholder="Логин" />
      <input onBlur={this.setPassword} type="text" id="password" class="fadeIn third" name="login" placeholder="Пароль" />
      <input type="submit" class="fadeIn fourth" value="Вход" onClick={this.SubmitLogin} />
      {this.state.error === 'error' ?
        <h1 class="color-red mt-4 mb-4">Логин или пароль неверен </h1>
        :
        " "
    }

  </div>
</div>
)
}
}
export default Login
