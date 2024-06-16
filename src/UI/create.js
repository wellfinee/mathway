import {Redirect, NavLink} from 'react-router-dom'
import React from 'react';
import {PullAppCreate} from './../BLL/API.js'
import * as axios from 'axios'
import ReactDOM from 'react-dom';
class Create extends React.Component{


  state = {
    format: 'file',
    class: '1',
    object: 'algebra',
    name: ' ',
    about: ' ',
    text: ' ',
    src: ' ',
    color: 'red'
  }


  setFormat = (e) => {
    this.setState({
      format: e.currentTarget.value
    })
  }
  setClass = (e) => {
    this.setState({
      class: e.currentTarget.value
    })
  }
  setName = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  setAbout = (e) => {
    this.setState({
      about: e.currentTarget.value
    })
  }
  setSrc = (e) => {
    this.setState({
      src: e.currentTarget.value
    })
  }
  setText = (e) => {
    this.setState({
      text: e.currentTarget.value
    })
  }
  setObj = (e) => {
    this.setState({
      object: e.currentTarget.value
    })
  }

  setColor = (e) => {
    this.setState({
      color: e.currentTarget.value
    })
  }


  render(){
    if (this.props.state.adminsreducer.isFetching === false) {
      return(<Redirect to="/" />)
    }
    const classT = []
    for (var i = 1; i <= 11; i++) {
      classT.push(i)
    }
    const classR = classT.map(p => {
      return(
          <option value={p}>{p}</option>
    )
    })

  return(
    <div class="container create-form">
      <h1> Добавка контента на сайт </h1>
      <div class="Choose">
      <div class="form-group">
        <select onBlur={this.setFormat} id="inputState" class="form-control">
          <option value="file">Файл</option>
          <option value="wiki">Статья</option>
        </select>
        <select id="inputState"  onBlur={this.setClass} class="form-control">
        {classR}</select>
        <select id="inputState" onBlur={this.setObj} class="form-control">
          <option value="algebra">Алгебра</option>
          <option value="geometry">Геометрия</option>
          <option value="math">Математика</option>
        </select>
        <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" onBlur={this.setName} placeholder="Название" />
        </div>
        <div class="col">
          <input type="text" class="form-control" onBlur={this.setAbout} placeholder="О контенте" />
        </div>
        {this.state.format === 'file' ?
        <div class="col">
          <input type="text" class="form-control" onBlur={this.setSrc} placeholder="Ссылка" />
        </div>
        : " "}
        </div>
        {this.state.format === 'text' ?
      <div class="form-group">
        <label for="exampleFormControlTextarea1" >Текст</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" onBlur={this.setText} rows="3"></textarea>
        <select id="inputState" onBlur={this.setColor} class="form-control">
          <option value="red">Красный</option>
          <option value="green">Зеленый</option>
          <option value="lime">Лаймовый</option>
          <option value="blue">Синий</option>
          <option value="purple">Фиолетовый</option>
          <option value="orange">Оранжевый</option>
        </select>
      </div>

      : " "}
      </div>
    <NavLink to={"/"} class="color-red bold bind"> <button type="button" class="btn btn-secondary" onClick={() => {PullAppCreate(this.state)}}>Добавить</button></NavLink>
      </div>
    </div>
  )
}
}
export default Create
