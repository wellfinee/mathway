import {rerender} from './../index.js'
let initial={
  isFetching: "alg",
  noaction: "inf",
  bigclass:[
    {name:7, color: "orange"},
    {name:8, color: "lime"},
    {name:9, color: "green"},
    {name:10, color: "purple"},
    {name:11, color: "blue"}
],
 littleclass: [
    {name: 1, color: 'red'},
    {name: 2, color: 'blue'},
    {name: 3, color: 'green'},
    {name: 4, color: 'lime'},
    {name: 5, color: 'purple'},
    {name: 6, color: 'orange'}
],
nav: [
  {name: "Главная", color: "red", src: '/'},
  {name: "Ученикам", color: "blue", src: '/#oquv', p: '+'},
  {name: "Учителям", color: "green", src: '/#oquv', p: '+'},
  {name: "Флешкарта", color: "purple", src: '/flashcards'},
  {name: "Репетиторская", color: "lime", src: '/repnow'},
  {name: "Обучение", color: "orange", src: '/online'},
],
  teacherarr: [
  {name: "Петров Петор Петрович" , src: null},
  {name: " Александров Александр Александрович", src: null}
]
}

const mainreducer = (state = initial, action) => {
if (action.type == "setAlgebra") {
    return {...state, isFetching: 'alg'}
  }
  if (action.type == "setGeometry") {
      return {...state, isFetching: "geo"}
  }
  if (action.type == "ChooseInf") {
      return {...state, noaction: "Math"}
  }
  if (action.type == "ChooseMath") {
      return {...state, noaction: "inf"}
  }
  return state
}
export default mainreducer
