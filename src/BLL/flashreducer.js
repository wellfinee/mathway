let bg = {
  isFetching: 1,
  colors: [
  {id:1, color:"red", class:"bg-red"},
  {id:2, color:"blue", class:"bg-blue"},
  {id:3, color:"green", class:"bg-green"},
  {id:4, color:"lime", class:"bg-lime"},
  {id:5, color:"purple", class:"bg-purple"},
  {id:6, color:"orange", class:"bg-orange"},
]}
const flashreducer = (state = bg, action) => {
  if (action.type == "setStyleF"){
    return {...state, isFetching: action.number}
  }
  return state
}
export default flashreducer
