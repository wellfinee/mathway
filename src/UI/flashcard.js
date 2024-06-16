const Bgarr = (props) =>{
let Bgar = props.state.flashreducer.colors.map(p => {
  if (p.id ==  props.state.flashreducer.isFetching){

    return <div class="flashcards">

            <div class={"text-flashcard f " + p.class}>
            <h3>Сложение</h3>
             <h1>6+6</h1>
            </div>
            <div class={"text-flashcard b " + p.class}>
            <h3>Сложение</h3>
             <h1>12</h1>
            </div>
          </div>
}
}
)
  return <>{Bgar}</>
}
export default Bgarr
