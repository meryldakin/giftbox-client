export function fetchGifts(){
  return fetch("http://localhost:3000/gifts")
    .then( res => res.json() )
}
export function fetchFriends(){
  return fetch("http://localhost:3000/users/1")
    .then( res => res.json() )
}
export function fetchEventLists(){
  return fetch("http://localhost:3000/event_lists")
    .then( res => res.json() )
}

export function logIn(params){
  return fetch("http://localhost:3000/auth", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function addFriend(params){
  return fetch("http://localhost:3000/add_friend", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}
export function editFriend(params){
  return fetch("http://localhost:3000/edit_friend", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function deleteFriend(params){
  return fetch('http://localhost:3000/delete_friend', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function addGift(params){
  return fetch("http://localhost:3000/add_gift", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function editGift(params){
  return fetch("http://localhost:3000/edit_gift", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function deleteGift(params){
  return fetch('http://localhost:3000/delete_gift', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function addEvent(params){
  return fetch('http://localhost:3000/event_lists', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}

export function findOrCreateCelebrations(params){
  return fetch('http://localhost:3000/celebrations', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}
