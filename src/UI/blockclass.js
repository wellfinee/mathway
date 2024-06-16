import {NavLink} from "react-router-dom"

const Blockclass = (props) => {
let arrlittleclass = props.state.mainreducer.littleclass.map(p => {
  return(
    <div class="prop" id="oquv">
    <NavLink to={"/learn/math/" + p.name}><div class={"card-class " + "bg-" + p.color}>{p.name} класс</div></NavLink>
    </div>
  )
})
  return(
    <div class="block-cont">
    {props.state.adminsreducer.isFetchingPeople === 'admin' ?
    <NavLink className={'color-bla ' + 'color-red ' + 'text-center'} to={'/create-content'}>Добавить</NavLink> : " "}
      {arrlittleclass}
    </div>
  )
}
export default Blockclass
