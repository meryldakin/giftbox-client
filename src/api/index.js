export function fetchGifts(){
  return fetch("http://localhost:3000/gifts")
    .then( res => res.json() )
}
export function fetchFriends(){
  return fetch("http://localhost:3000/users")
    .then( res => res.json() )
}
export function fetchEvents(){
  return fetch("http://localhost:3000/events")
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
