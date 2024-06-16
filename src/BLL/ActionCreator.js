export const setAlg = () => {
  return{
    type:"setAlgebra"
  }
}
export const setGeo = () => {
    return{
  type:"setGeometry"
}
}

export const setFile = () => {
    return{
  type:"setFile"
}
}
export const setText = () => {
    return{
  type:"setText"
}
}

export const setStyleF = (number) => {
    return{
  type:"setStyleF",
  number: number
}
}
export const ChooseInf = () => {
    return{
  type:"ChooseInf",
}
}
export const ChooseMath = () => {
    return{
  type:"ChooseMath",
}
}
export const setBooks = (books) => {
    return{
  type:"setBooks",
  books: books
}
}
export const setAdmins = (admins) => {
    return{
  type:"setAdmins",
  admins : admins
}
}
export const ADMINONLINE = () => {
    return{
  type:"ADMINONLINE",
}
}
export const PEOPLEONLINE = () => {
    return{
  type:"PEOPLEONLINE",
}
}

export const EXIT = () => {
    return{
  type:"EXIT",
}
}
export const objectF = (classF, object) => {
  return{
    type: 'disobj',
    pages:{
    class: classF,
    object: object
  }
  }
}
