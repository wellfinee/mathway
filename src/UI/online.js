import video from './../IMG/video4.mp4'
import video2 from './../IMG/video3.mp4'
import Footer from "./footer.js"
import imgF from './../IMG/online-edu-1.jpg'
import imgT from './../IMG/online-edu-2.jpg'
import imgL from './../IMG/online-edu-3.jpg'
import imgM from './../IMG/online-edu-4.jpg'
import Contact from './contact.js'
import {ChooseInf, ChooseMath} from './../BLL/ActionCreator'
const Online = (props) => {
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
  <h1>Будь как дома!</h1>
  </div>
  <div class="rep-text-bottom online color-green">
  <h1>Онлайн обучение</h1>
  </div>
  </div>
  <div class="big-wrapper">
  <div class="about-online fadeInRightBig wow">
  <div class="img-container-online">
  <img src={imgF} class="img-online" />
  </div>
  <div class="text-online">
  <h1 class="color-green">Находитесь в уюте!</h1>
  <h3>Обучаться вы можете в любом месте. Можете ютится в мягкой кровати или в турпоходе!</h3>
  </div>
  </div>
  <div class="about-online fadeInRightBig wow">
  <div class="text-online left">
  <h1 class="color-purple">Будьте под защитой!</h1>
  <h3>Обучаясь и находясь дома вы защищаете от эпидемии не только себя, но и своих близких!</h3>
  </div>
  <div class="img-container-online right">
  <img src={imgT} class="img-online" />
  </div>
  </div>
  <div class="about-online fadeInRightBig wow">
  <div class="img-container-online">
  <img src={imgL} class="img-online" />
  </div>
  <div class="text-online">
  <h1 class="color-blue">У телефона!</h1>
  <h3>В течении дня вы можете обращяться за помощью в соц сети, при вашей необходимости!</h3>
  </div>
  </div>

  <div class="about-online fadeInRightBig wow">
  <div class="text-online left">
  <h1 class="color-red">Всегда с вами</h1>
  <h3>В любой моммент вы можете заглянуть на ютуб канал, где найдется нужная вам информация!</h3>
  </div>
  <div class="img-container-online right">
  <img src={imgM} class="img-online" />
  </div>
  </div>
  </div>
  <div class="destinity threen">
  <div class="Choose">
    <div onClick={() => {props.store.dispatch(ChooseMath())}} class={props.state.mainreducer.noaction === "Math" ? "items-quas noaction-rep-threen" : "items-quas"}>
    <h2>Математика</h2>
    </div>
    <div onClick={() => {props.store.dispatch(ChooseInf())}} class={props.state.mainreducer.noaction === "inf" ? "items-quas noaction-rep-threen two" : "items-quas two"}>
    <h2>Информатика</h2>
    </div>
    </div>
    <div class="obj-rep">
      <h1 class="freen">{props.state.mainreducer.noaction == "inf" ? "Математика" : "Информатика"}</h1>
    </div>
    <div class="big-obg-rep">
    <div class="classes bbs">
      <h1>Группы</h1>
      <h2>Школьная программа</h2>
      {returnClassRep}
    </div>
    <div class="pay bbs">
      <h1> Цены </h1>
      <h4>{props.state.mainreducer.noaction == "inf" ? "От 150 000 сум/месяц" : "От 120 000 сум/месяц"}</h4>
    </div>
    </div>
  </div>
  <Contact />
    <Footer />
  </>
}
export default Online
