import React from 'react';
import {withRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import ObjectAct from './object.js'
import * as axios from 'axios'
import {setBook} from './../BLL/API.js'
import {setBooks,objectF} from './../BLL/ActionCreator.js'
class ObjectContainer extends React.Component{
  render(){
    return(
      <ObjectAct {...this.props} />
    )
  }
}
export default  withRouter(ObjectContainer)
