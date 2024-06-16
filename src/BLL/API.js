import * as axios from 'axios'
import {Redirect} from 'react-router-dom'
const initial = axios.create({
  withCredentials:true,
  headers:{
    'mode': "no-cors"
  }
})
let BaseURL = 'http://localhost/infizmathuz'

export const setBook = (currentPage, count) => {
  return initial.get(BaseURL)
}
export const PullAppCreate = (state) => {
  console.log(state)
  let form = new FormData()
  form.append("format", state.format)
  form.append("class", state.class)
  form.append("name", state.name)
  form.append("about", state.about)
  form.append("text", state.text)
  form.append("src", state.src)
  form.append("object", state.object)
  form.append("color", state.color)
  axios.post('http://localhost/infomathuz/create.php', form)
  return(<Redirect to="/" />)
}

export const PullAppEdit = (state , classChild) => {
 let form = new FormData()
 form.append("name", state.name)
 form.append("about", state.about)
 form.append("text", state.text)
 form.append("src", state.src)

axios.post('http://localhost/infomathuz/edit/' + classChild, form)

return(<Redirect to="/" />)
}
export const getEditBook = (classChild) => {
  return axios.get('http://localhost/infomathuz/edit/' + classChild).then(p => p.data)
}
export const connectToLogin = (state) => {
    let form = new FormData()
    form.append('login', state.serverlogin)
    form.append('password', state.serverpass)
    return axios.post('http://localhost/infomathuz/users.php', form)
}
export const deleteB = (id) => {
    let form = new FormData()
    form.append('id', id)
    axios.post('http://localhost/infomathuz/delete.php', form)
    window.location.reload()
  }
  export const allbook = (objectChild, isFetching, classChild) => {
      return axios.get('http://localhost/infomathuz/current/current/' + objectChild + '/' + isFetching + '/'+ classChild).then(p => p.data)
  }
  export const allbooks = (objectChild, isFetching, classChild, page) => {
       return  axios.get('http://localhost/infomathuz/book/index/' + objectChild + '/' + isFetching + '/'+ classChild + '/' + page).then(p => p.data)
   }
   export const regcode = (state) =>{
     let form = new FormData()
     form.append('login', state.serverlogin)
     form.append('password', state.serverpass)
     form.append('email', state.email)
     return axios.post('http://localhost/infomathuz/reg.php', form)
   }
   export const regcode2 = (form) => {
    return axios.post('http://localhost/infomathuz/submit.php', form)
   }
   export const apprequiere = () => {
     return axios.get('http://localhost/infomathuz/current.php').then(p => p.data)
   }
    export const textr = (id) => {
        return axios.get('http://localhost/infomathuz/text/text/' + id).then(p => p.data)
    }
