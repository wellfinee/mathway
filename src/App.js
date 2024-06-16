import './App.css';
import Header from "./UI/header.js"
import IndexH from './UI/indexH.js'
import  ObjectContainer from './UI/object-container.js'
import Flashcards from './UI/flashcards.js'
import Repnow from './UI/rep.js'
import Text from './UI/text.js'
import Login from "./UI/login.js"
import Edit from "./UI/edit.js"
import Online from "./UI/online.js"
import Create from "./UI/create.js"
import Regestration from "./UI/regestration.js"
import {BrowserRouter, Route, NavLink} from "react-router-dom"
import Cookies from 'universal-cookie';
import {thunkL} from "./BLL/redux.js"
import React from 'react';
export const cookies = new Cookies()
class App extends React.Component {
  componentDidMount(){
    if (cookies.get('pearson')){
      thunkL()
    }
  }
  
  render(){
  return (
    <BrowserRouter>
    <div>
    <Header state={this.props.state} store={this.props.store}/>
    <Route exact path="/" render={ () => <IndexH state={this.props.state} store={this.props.store} />} />
    <Route exact path="/login" render={ () => <Regestration state={this.props.state} store={this.props.store} />} />
    <Route exact path="/create-content" render={ () => <Create state={this.props.state} store={this.props.store} />} />
    <Route exact path="/login-only-for-us-not-for-u" render={ () => <Login state={this.props.state} store={this.props.store} />} />
    <Route path="/learn/:object?/:class?" render={ () => <ObjectContainer state={this.props.state} store={this.props.store} /> } />
    <Route path="/edit/:id?" render={ () => <Edit state={this.props.state} store={this.props.store} /> } />
    <Route path="/text/:id?" render={ () => <Text state={this.props.state} store={this.props.store} /> } />
    <Route exact path='/flashcards' render={ () => <Flashcards state={this.props.state} store={this.props.store} /> } />
    <Route exact path='/repnow' render={ () => <Repnow state={this.props.state} store={this.props.store} /> } />
    <Route exact path='/online' render={ () => <Online state={this.props.state} store={this.props.store} /> } />
    </div>
    </BrowserRouter>
  )
}
}

export default App;
