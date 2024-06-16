import {withRouter, NavLink, Redirect} from 'react-router-dom'
import {setText, setFile, setBooks} from './../BLL/ActionCreator.js'
import  {objectF} from './../BLL/ActionCreator.js'
import React from 'react';
import Footer from "./footer.js"
import {cookies} from './../App.js'
import * as axios from 'axios'
import {deleteB, allbook, allbooks, allbooksrend} from './../BLL/API.js'
class ObjectAct extends React.Component{
state= {
  page: 1,
  maxCount: 10,
  minCount:0,
  Books: 0
}

render(){
  let classChild = this.props.match.params.class
  let objectChild = this.props.match.params.object
if(this.state.Books === 0){
allbook(objectChild, this.props.state.classreducer.isFetching, classChild).then(p =>{
  this.setState({
    Books: p
  })
})
}
let page = Math.ceil(this.state.Books/10)
let pages = []
for (var i = 1; i <= page; i++) {
  pages.push(i)
}

if(this.props.state.classreducer === ' '){
   this.props.store.dispatch(objectF(classChild, objectChild))
 }
 if (this.props.state.classreducer.objects.length === 0){
  allbooks(objectChild, this.props.state.classreducer.isFetching, classChild, this.state.page).then(p => {
        console.log(p)
        this.props.store.dispatch(setBooks(p))

      })
    }
  let objectName = " "
  if (this.props.match.params.object == 'geometry'){
     objectName = 'Геометрия'

  }
 if (this.props.match.params.object == 'algebra'){
     objectName = 'Алгебра'
  }
  if (this.props.match.params.object == 'math'){
      objectName = 'Математика'
   }
  let attr = this.props.state.classreducer.isFetching
  let arrforbis = []
  let setFiles = () => {
    this.setState({
      page: 1
    })
    this.props.store.dispatch(setFile())
    allbooks(objectChild, 'file', classChild, 1).then(p => {
         this.props.store.dispatch(setBooks(p))

       })
       allbook(objectChild, 'file', classChild).then(p =>{
           this.setState({
           Books: p,
         })})
}
  let setTexts = () => {
    this.setState({
      page: 1
    })
    this.props.store.dispatch(setText())

    allbooks(objectChild, 'wiki', classChild, 1).then(p => {
         this.props.store.dispatch(setBooks(p))

       })
       allbook(objectChild, 'wiki', classChild).then(p =>{
         this.setState({
           Books: p
         })})
}
  let back = () => {
    if (this.state.minCount != 0){
      this.state.minCount--
      this.state.maxCount--
    }
  }
  let next = () => {
    if (this.state.maxCount > page ){
      this.state.minCount++
      this.state.maxCount++
    }
  }
  let setPage = (p) => {
    allbooks(objectChild, this.props.state.classreducer.isFetching, classChild, p).then(p => {
         this.props.store.dispatch(setBooks(p))

       })
    this.setState({
      page: p
    })
  }
  let Pathrow = () => {
    arrforbis = this.props.state.classreducer.objects.map(p =>{
      if (this.props.match.params.object = p.object){
        if(classChild == p.class){
          return(
            <div class="object-item">
              <h3>{p.name}</h3>
              <h5>{p.about}</h5>
              <NavLink to={attr == 'file' ? p.src : '/text/' + p.id} class="nav-object">{attr == 'file' ? "Cкачать" : "Читать"}</NavLink>
              {this.props.state.adminsreducer.isFetchingPeople === 'admin'? <> <a href="#" class="color-red bold" onClick={() => {deleteB(p.id)}}>Удалить</a> <NavLink to={"/edit/" + p.id} class="color-red bold bind">Изменить</NavLink> </>: " "}
              <hr class="modern-hr" />
            </div>
    )
  }
 }
})
  return <div>{arrforbis}</div>
}

  return(
    <div class="object">
    <div class="big-t-g"><span class="bbb color-green">{objectName}</span></div>
    <div class="menu-class text-center">
    <span onClick={setFiles} class={this.props.state.classreducer.isFetching == "file"? "big-text-2 alg action" : "big-text-2 alg desable"}>Файлы</span>
    <span onClick={setTexts} class={this.props.state.classreducer.isFetching == "text"? "big-text-2 geo action" : "big-text-2 geo desable"}>Статьи</span>
    </div>
    <div class="object-list">
    <div class="container">
    <Pathrow />
    <div class="preloader">
      <span   class="attr " onClick={back}>Назад</span>
      {pages.map(p => {
        if (this.state.minCount < p && p <= this.state.maxCount){
          return(<div class="span"> <span onClick={() => {setPage(p)}} class={this.state.page === p && "action"}>{p}</span></div>)
      }})}
        <span  class="attr" onClick={next}>Далее</span>

      </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}
}
export default  withRouter(ObjectAct)
