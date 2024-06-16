let initial = {
  currentUsers: [  ],
  isFetchingPeople: 'admin'
}
const adminsreducer = (state = initial, action) => {
  if(action.type == 'setAdmins'){
    return{...state, currentUsers : action.admins}
  }
  if(action.type == 'ADMINONLINE'){
    return{...state, isFetchingPeople : 'admin'}

  }
  if(action.type == 'PEOPLEONLINE'){
    return{...state, isFetchingPeople : 'people'}

  }
  if(action.type == 'EXIT'){
      return{...state, isFetchingPeople : ' '}

    }
  return state
}
export  default adminsreducer
