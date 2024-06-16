import {setStyleF} from './../BLL/ActionCreator.js'
import Bgarr from './flashcard.js'
import Footer from "./footer.js"
import Warning from './warning.js'
const Flashcards = (props) => {
  let styles = []
  for (var i = 1; i <=  props.state.flashreducer.colors.length; i++) {
      styles.push(i)
  }
  let setStyle = (number) => {
    props.store.dispatch(setStyleF(number))
  }
  let stylesarr = styles.map(p => {
    return(<span onClick={() => {setStyle(p)}} class={ props.state.flashreducer.isFetching == p ? "nope action-f" : 'nope no-action-f'}>{p}</span>)
  })
  return(
    <div class="wrapper-flash">
    <div class="text-hor">
    <span class="bigs">Флешкарта</span>
    <span class="smalls">Выберите стиль который заставит петь вашу душу</span>
    </div>
    <Bgarr state = {props.state} />
    <div class="preloder-flashcard">
      {stylesarr}
    </div>
    <Warning />
      <Footer />
    </div>
  )
}
export default Flashcards
