import {NavLink} from 'react-router-dom'
import {cookies} from './../App.js'
import open from './../IMG/open.png'
import close from './../IMG/exit.png'
import {EXIT} from './../BLL/ActionCreator.js'
const Header = (props) => {

  const exitLOL = () => {
      cookies.remove("pearson");
      props.store.dispatch(EXIT())
    }
  let navarr = props.state.mainreducer.nav.map(p=>{
    if (!p.p){
    return(
    <li class="nav-item">
      <NavLink className={'nav-link '+ 'color-' + p.color} to={p.src}>{p.name}</NavLink>
    </li>
  )
  }
  if (p.p){
    return(
    <li class="nav-item">
      <a class={'nav-link '+ 'color-' + p.color} href={p.src}>{p.name}</a>
    </li>
  )
  }
  })
  return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a class="navbar-brand" href="#">Infomath</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-r">
    {navarr}
    {props.state.adminsreducer.isFetchingPeople === ' ' ?
    <li class="nav-item">
        <NavLink to={'/login'} className='bll nav-link color-red'>Вход</NavLink>
    </li>

    :
    <li class="nav-item">
        <NavLink onClick={exitLOL} className='bll nav-link color-red'  to={'/'}>Выход</NavLink>
    </li>

  }
    </ul>
  </div>
  </div>
</nav>
)
}
export default Header
