import video from './../IMG/video.mp4'
import video2 from './../IMG/video2.mp4'
import imgF from './../IMG/ob-tell-front.png'
import imgT from './../IMG/ob-tell-left.png'
import imgL from './../IMG/ob-tell-right.png'
import imgFG from './../IMG/ob-tell-front-g.png'
import Footer from "./footer.js"
import imgTG from './../IMG/ob-tell-left-g.png'
import imgLG from './../IMG/ob-tell-right-g.png'
import Contact from './contact.js'
import {ChooseInf, ChooseMath} from './../BLL/ActionCreator'
const Repnow = (props) => {
    const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  let callVideo = getRandomInt(2)
  let classRep = ['5','6','7','8','9','10','11']
  let returnClassRep = classRep.map(p => {
    return <h4>{p} класс</h4>
  })
  return <>
  <div class="video-block">
  <video class="video" autoplay="true" loop="true" muted="muted">
  {callVideo == 0 ?
  <source src={video}/>
  :
  <source src={video2}/>
}
  </video>
  <div class={callVideo == 0 ? "text-before-video-two" : "text-before-video"}>
  <h1>Размышляй, не гадай, решай!</h1>
  </div>
  <div class="rep-text-bottom color-green">
  <h1>Репетиторская</h1>
  </div>
  </div>
  <div class="items-rep container">
  <div class="this-items">
    <img src={imgFG} class="image-front" />
    <img src={imgF} class="image-back" />
    <h3>Всегда у телефона</h3>
  </div>
  <div class="this-items">
    <img src={imgTG} class="image-front" />
    <img src={imgT} class="image-back" />
    <h3>Многолетний опыт</h3>
  </div>
  <div class="this-items">
    <img src={imgLG} class="image-front" />
    <img src={imgL} class="image-back" />
    <h3>Подготовка к ВУЗам</h3>
  </div>
  </div>
  <div class="destinity">
  <div class="Choose">
    <div onClick={() => {props.store.dispatch(ChooseMath())}} class={props.state.mainreducer.noaction === "Math" ? "items-quas noaction-rep" : "items-quas"}>
    <h2>Математика</h2>
    </div>
    <div onClick={() => {props.store.dispatch(ChooseInf())}} class={props.state.mainreducer.noaction === "inf" ? "items-quas noaction-rep two" : "items-quas two"}>
    <h2>Информатика</h2>
    </div>
    </div>
    <div class="obj-rep">
      <h1>{props.state.mainreducer.noaction == "inf" ? "Математика" : "Информатика"}</h1>
    </div>
    <div class="big-obg-rep">
    <div class={props.state.mainreducer.noaction == "inf" ? "classes" : "classes bbs"}>
      <h1>Группы</h1>
      <h2>Школьная программа</h2>
      {returnClassRep}
    {props.state.mainreducer.noaction == "inf" ?
     <div>
      <h2>Подготовка к ВУЗам</h2>
      <h4>Узбекским</h4>
      <h4>Русским</h4>
    </div> : " "}
    </div>
    <div class={props.state.mainreducer.noaction == "inf" ? "pay" : "pay bbs"}>
      <h1> Цены </h1>
      <h4> От 300 000 сум/месяц </h4>
    {props.state.mainreducer.noaction == "inf" ? <h4> От 500 000 сум/месяц </h4> : " "}
    </div>
    </div>

  </div>
  <div class="shaped">
    <div class="left-block-rep">
    <h1>Информатика</h1>
    <div class="shaped-block inf-shaped">
      <h2>C 16:00 - 22:00</h2>
      <h3>Пн, Ср, Пт </h3>
    </div>
    </div>
    <div class="right-block-rep">
    <div class="shaped-block math-shaped">
      <h2>C 16:00 - 22:00</h2>
      <h3>Вт, Чт, Сб</h3>
    </div>
    <h1>Математика</h1>
    </div>
  </div>
  <div class="warning-rep">
  <h1>Для заказа услуг обратитесь в Telegram <code>@TELEGRAM</code></h1>
  </div>
  <Contact />
    <Footer />
  </>
}
export default Repnow
