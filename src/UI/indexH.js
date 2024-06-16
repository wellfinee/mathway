import StartIMG from "./startimg.js"
import BottomIMG from "./bottomimg.js"
import Blockclass from "./blockclass.js"
import BlockBigclass from "./blockbigclass.js"
import AboutUS from "./about.js"
import Footer from "./footer.js"
import Teacher from "./teacher.js"
import Contact from './contact.js'
import {ADMINONLINE} from "./../BLL/ActionCreator.js"
import Cookies from 'universal-cookie';
import {cookies} from './../App.js'
import {thunkL} from "./../BLL/redux.js"
const IndexH = (props) => {
  return(
  <div>
  <StartIMG />
  <BottomIMG />
  <Blockclass  state={props.state}/>
  <BlockBigclass state={props.state} store={props.store} />
  <AboutUS />
  <Contact />
  <Teacher state={props.state}/>
    <Footer />
  </div>
)
}
export default IndexH
