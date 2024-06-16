const Teacher = (props) => {

  let arrteacher = props.state.mainreducer.teacherarr.map(p => {
    return(
    <div class="item-teacher text-center">
      <div class="img-item-teacher">
        <img src={p.src != null ? p.src :'https://www.seekpng.com/png/full/846-8465978_critres-de-choix-pour-la-solution-de-cration.png'} class="img-teacher" />
      </div>
      <div class="text-teacher">
        <h4>{p.name}</h4>
      </div>
    </div>
  )})
  return(
    <div class="Teacher">
    <div class="big-text-t">Учителя</div>
    <div class="container">
      { arrteacher }
    </div>
    </div>
  )
}
export default Teacher
