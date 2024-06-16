import React from 'react';
import ReactDOM from 'react-dom';
import ObjectAct from './object.js'
import {Redirect} from 'react-router-dom'
import {setAdmins} from './../BLL/ActionCreator.js'
import * as axios from 'axios'
import img from './../IMG/reg-png.png'
import {thunkL} from "./../BLL/redux.js"
import {connectToLogin, regcode, regcode2} from './../BLL/API.js'
import {cookies} from './../App.js'
import Cookies from 'universal-cookie';

class Login extends React.Component{
  state = {
    serverlogin: " ",
    serverpass: ' ',
    passwordr: ' ',
    email: ' ',
    login: false,
    error: ' ',
    module: 'login',
    code: ' ',
    codereg: ' '
  }
  remember = () => {
    if(this.state.module === 'login'){
      this.setState({
      module: 'reg',
      serverlogin: " ",
      serverpass: ' ',
      passwordr: ' ',
      email: ' ',
      error: ' '

    })};
    if(this.state.module === 'reg'){
      this.setState({
         module: 'login' ,
         serverlogin: " ",
         serverpass: ' ',
         passwordr: ' ',
         error: ' ',
         email: ' ',
       })};
  }
  error1 = () =>{
  this.setState({
        error:  'Заполните поля'
})
}
SubmitRegerstration = () => {
  let form = new FormData()
  form.append('email', this.state.email)
  if (this.state.email != ' '){
  if (this.state.serverpass != ' '){
  if (this.state.serverlogin != ' '){
  if(this.state.serverpass.length >= 8){
  if (this.state.serverpass === this.state.passwordr){
    regcode2(form).then(p=> {
      this.setState({
        code: p.data
      })
      console.log(p.data)
    })
  }else{
    this.setState({
      error: 'Пароли не совпадают'
    })
  }
}else{
  this.setState({
    error: 'Пароль должен состоять минимум из 8 символов'
  })
}
}
else {
      this.error1()
}
}else {
      this.error1()
  }
}  else {
      this.error1()
  }
}
SubmitLogin = () => {connectToLogin(this.state).then(p=>{
    if (p.data != 'noop'){
        cookies.set('pearson', {person: p.data.person, login: this.state.serverlogin}, {maxAge: "3600"});
        thunkL()
        this.setState({
            login:  true
      })
    }
    else {
        this.setState({
            error:  'Неверный логин или пароль'
      })
    }
  })
  }
checkregestration = () => {
  if(this.state.code === this.state.codereg){
    regcode(this.state)
    this.setState({module: 'login'})
  }
}
setLogin = (e) => {
  if(e.currentTarget.value.length != 0){
  this.setState({serverlogin: e.currentTarget.value})}
}
setPassword = (e) => {
  if(e.currentTarget.value.length != 0){
  this.setState({serverpass: e.currentTarget.value})}
}
setPasswordR = (e) => {
  if(e.currentTarget.value.length != 0){
  this.setState({passwordr: e.currentTarget.value})}
}
setEmail = (e) => {
  if(e.currentTarget.value.length != 0){
  this.setState({email: e.currentTarget.value})}
}
setCode = (e) => {
  if(e.currentTarget.value.length != 0){
  this.setState({codereg: e.currentTarget.value})}
}
  render(){
if (this.state.login === true){
  return <Redirect to="/" />
}
  return <div class="login-bg">
<div class="wrapper fadeInDown">
{this.state.module === 'reg' ?
<div id="formContent">
  <h2 class="active"> Регистрация </h2>
      {this.state.code == ' ' ? <>
    <input onChange={this.setLogin} type="text" id="login" class="fadeIn second" name="login" placeholder="Логин" />
    <input onChange={this.setPassword} type="password" id="password" class="fadeIn third" name="login" placeholder="Пароль" />
    <input onChange={this.setPasswordR} type="password" id="password" class="fadeIn third" name="login" placeholder="Повторить пароль" />
    <input onChange={this.setEmail} type="Email" id="email" class="fadeIn third" name="email" placeholder="Email" />
    <button type="submit" class="fadeIn fourth"  onClick={this.SubmitRegerstration}>Регистрация</button>
      <span class="color-blue" onClick={this.remember}> Войти в аккаунт</span>
    </>
    :
    ' '}
      <h1 class="color-red mt-4 mb-4">{this.state.error}</h1>
    {this.state.code != ' ' ?
    <>
      <h1 class="color-red mt-4 mb-4">Введите код с письма отправленного на почту</h1>
      <input onChange={this.setCode} type="email" class="fadeIn third" name="code" placeholder="КОД" />
        <button type="submit" class="fadeIn fourth"  onClick={this.checkregestration}>Отправить код</button>
    </>
      :
      " "
    }
</div>
:
  <div id="formContent">
    <h2 class="active"> Вход </h2>
      <input onChange={this.setLogin} type="text" id="login" class="fadeIn second" name="login" placeholder="Логин" />
      <input onChange={this.setPassword} type="password" id="password" class="fadeIn third" name="login" placeholder="Пароль" />
    <button type="submit" class="fadeIn fourth"  onClick={this.SubmitLogin}>Вход</button>
      <span onClick={this.remember} class="color-blue"> Создать аккаунт </span>

        <h1 class="color-red mt-4 mb-4">{this.state.error}</h1>

  </div>
}
</div>

</div>
}
}
export default Login
