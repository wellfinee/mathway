import React from 'react';
import Footer from './footer.js'
import {textr} from './../BLL/API.js'
import {withRouter, Redirect} from 'react-router-dom'
import * as axios from 'axios'
import {cookies} from './../App.js'
class Text extends React.Component {
  state={
    color: 'red',
    name: ' ',
    text: ' ',
  }
  componentDidMount(){
    let id = this.props.match.params.id
  textr(id).then(p => {
      this.setState({
        name: p.name,
        color: p.color,
        text: p.text
      })
    })
  }
  render(){
    if (!cookies.get('pearson')){
      return <Redirect to="/login" />
    }
    return(
      <><div class={'name-container bg-' + this.state.color}>{this.state.name}</div>
        <div class="container text-center text-t"><h2>{this.state.text}</h2></div>
        <Footer />
        </>
    )
  }
}
export default withRouter(Text)
