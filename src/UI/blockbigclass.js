import {rerender} from "./../index.js"
import {NavLink} from "react-router-dom"
import {setAlg, setGeo} from './../BLL/ActionCreator.js'

const BlockBigclass = (props) => {
  let arrbigclass = props.state.mainreducer.bigclass.map(p => {
    return(
      <div class="prop" id="usto">
      <NavLink to={props.state.mainreducer.isFetching == "alg" ? "/learn/algebra/" + p.name : "/learn/geometry/" + p.name}> <div class={"card-class " + "bg-" + p.color}>{p.name} класс</div></NavLink>
      </div>
    )
  })
  return(
    <div class="BigClass">
    <b onClick={() => {props.store.dispatch(setAlg())}} class={props.state.mainreducer.isFetching == "alg"? "big-text alg action" : "big-text alg desable"}>Алгебра</b>
    <b onClick={() => {props.store.dispatch(setGeo())}} class={props.state.mainreducer.isFetching == "geo"? "big-text geo action" : "big-text geo desable"}>Геометрия</b>
    <h4> *Выделите красным нужный вам предмет* </h4>
    {arrbigclass}
    </div>
  )
}
export default BlockBigclass
