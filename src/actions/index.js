import * as apiHelpers from "../api"

export function fetchCurrentUser(params) {

  console.log("hit fetch current user in actions", params)

  return function(dispatch){
    dispatch({type: "START_FETCH_USER"});
    fetch(`http://localhost:3000/decode_token`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      })
      .then( res => res.json())
      .then(data => dispatch({type: "FETCH_USER", payload: data }) )
    }
  }

export function fetchFriends(params) {
  console.log("fetch friends hit", params)
  return function(dispatch){
    dispatch({type: "START_FETCH_FRIENDS"})
    fetch(`http://localhost:3000/users/${params}`)
    .then( res => res.json() )
    .then(data => dispatch({type: "FETCH_FRIENDS", payload: data }) )
  }
}

export function fetchEventLists(params){
  console.log("fetch events hit", params)
  return function(dispatch){
    dispatch({type: "START_FETCH_EVENTS"})
    apiHelpers.fetchEventLists(params)
    .then(data => {
      dispatch({type: "FETCH_EVENTS", payload: data})
    })
  }
}

export function addFriend(params){
  return function(dispatch){
    dispatch({type: "START_ADD_FRIEND"})
    apiHelpers.addFriend(params)
    .then( data => {
      dispatch({type: "ADD_FRIEND", payload: data})
    })
  }
}

export function editFriend(params){
  return function(dispatch){
    dispatch({type: "START_EDIT_FRIEND"})
    apiHelpers.editFriend(params)
    .then( data => {
      dispatch({type: "EDIT_FRIEND", payload: data})
    })
  }
}

export function deleteFriend(params){
  return function(dispatch){
    dispatch({type: "START_DELETE_FRIEND"})
    apiHelpers.deleteFriend(params)
    .then( data => {
      dispatch({type: "DELETE_FRIEND", payload: data})
    })
  }
}
