import {createStore, combineReducers} from 'redux'
import mainreducer from './mainreducer.js'
import classreducer from './classreducer.js'
import flashreducer from './flashreducer.js'
import adminsreducer from './adminsreducer.js'
import {createConnection, connect, end} from 'mysql'
import {setBook} from './API.js'
import {setBooks} from './ActionCreator.js'
import * as axios from 'axios'
import {ADMINONLINE, PEOPLEONLINE} from "./ActionCreator.js"
import {cookies} from './../App.js'
import {applyMiddleware}  from 'redux';
import thunk from 'redux-thunk'

let reducers = combineReducers({
  mainreducer, classreducer, flashreducer, adminsreducer
})
let store = createStore(reducers, applyMiddleware(thunk))


export const thunkL = () =>{
  let form = new FormData()
  form.append('login', cookies.get('pearson').login)
  axios.post('http://localhost/infomathuz/check.php', form).then(p =>{

    if (  p.data == 'admin'){
      let state = store.getState()
      if (state.adminsreducer.isFetchingPeople == ' '){
        store.dispatch(ADMINONLINE())
    }}
    else if ( p.data == 'person') {
      let state = store.getState()
      if (state.adminsreducer.isFetchingPeople == ' '){
        store.dispatch(PEOPLEONLINE())
    }
    }
  })

   }



export default store
