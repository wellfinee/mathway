import {Redirect, withRouter, NavLink} from 'react-router-dom'
import React from 'react';
import * as axios from 'axios'
import {getEditBook} from './../BLL/API.js'
import {PullAppEdit} from './../BLL/API.js'
import ReactDOM from 'react-dom';
class Edit extends React.Component{
  state = {
    name: " ",
    about: ' ',
    text: ' ',
    src: ' '
  }
  classChild = this.props.match.params.id
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

componentDidMount(){
  if (this.state.name === " "){
  getEditBook(this.classChild).then(p => {
      this.setState({
        name: p.name,
        about: p.about,
        text: p.text,
        src: p.src
      })
})}

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
        <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" onChange={this.setName} value={this.state.name} placeholder="Название" />
        </div>
        <div class="col">
          <input type="text" class="form-control" onChange={this.setAbout}  value={this.state.about} placeholder="О контенте" />
        </div>

        <div class="col">
          <input type="text" class="form-control" onChange={this.setSrc} value={this.state.src} placeholder="Ссылка" />
        </div>

        </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1" >Текст</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.setText}  value={this.state.text} rows="3"></textarea>
      </div>
      </div>
        <NavLink to={"/"} class="color-red bold bind"><button type="button" class="btn btn-secondary" onClick={() => {PullAppEdit(this.state, this.classChild)}}>Изменить</button></NavLink>
      </div>
  )
}
}
export default withRouter(Edit)
