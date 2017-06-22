const defaultState = {current_user_id: 0, current_user: 0, friendships: 0, event_lists: 0, loading: false}


const reducer = (state=defaultState, action) => {
  console.log(action)
  switch(action.type) {
    case 'START_FETCH_USER':
      return {
        ...state,
        current_user_id: 0,
        current_user: 0,
        loading: true
      }
    case 'FETCH_USER':
      return {
        ...state,
        current_user_id: action.payload.user.id,
        current_user: action.payload.user,
        loading: false
      }
    case 'START_FETCH_FRIENDS':
      return {
        ...state,
        friendships: 0,
        loading: true
      }
    case 'FETCH_FRIENDS':
      return {
        ...state,
        friendships: action.payload.user.friendships,
        loading: false
      }
    case 'START_FETCH_EVENTS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_EVENTS':
      return {
        ...state,
        event_lists: action.payload.event_lists,
        loading: false
      }
    case "START_ADD_FRIEND":
      return {
        ...state,
        loading: true
      }
    case 'ADD_FRIEND':
      return{
        ...state,
        friendships: [...state.friendships, action.payload.friendship],
        loading: false
      }
    case "START_EDIT_FRIEND":
      return {
        ...state,
        loading: true
      }
    case 'EDIT_FRIEND':
      const friendEditIndex = state.friendships.findIndex(friendship => friendship.friend.id === action.payload.friendship.friend.id);
      return{
        ...state,
        friendships:  [
          ...state.friendships.slice(0, friendEditIndex),
          action.payload.friendship,
          ...state.friendships.slice(friendEditIndex + 1),
        ],
        loading: false
      }
    case "START_DELETE_FRIEND":
      return {
        ...state,
        loading: true
      }
    case 'DELETE_FRIEND':
      const friendRemovalIndex = state.friendships.findIndex(friendship => friendship.friend.id === action.payload);
      return{
        ...state,
        friendships:  [
          ...state.friendships.slice(0, friendRemovalIndex),
          ...state.friendships.slice(friendRemovalIndex + 1),
        ],
        loading: false
      }
      case "START_ADD_EVENT":
        return {
          ...state,
          loading: true
        }
      case 'ADD_EVENT':
        return{
          ...state,
          event_lists: [...state.event_lists, action.payload.event_list],
          loading: false
        }
      case "START_EDIT_EVENT":
        return {
          ...state,
          loading: true
        }
      case 'EDIT_EVENT':
        const eventEditIndex = state.event_lists.findIndex(event_list => event_list.id === action.payload.event_list.id);
        return{
          ...state,
          event_lists:  [
            ...state.event_lists.slice(0, eventEditIndex),
            action.payload.event_list,
            ...state.event_lists.slice(eventEditIndex + 1),
          ],
          loading: false
        }
      case "START_EDIT_COMPLETED_LIST":
        return {
          ...state,
          loading: true
        }
      case 'EDIT_COMPLETED_LIST':
        const eventCompletedIndex = state.event_lists.findIndex(event_list => event_list.id === action.payload.event_list.id);
        return {
          ...state,
          event_lists:  [
            ...state.event_lists.slice(0, eventCompletedIndex),
            action.payload.event_list,
            ...state.event_lists.slice(eventCompletedIndex + 1),
          ],
          loading: false
        }
        case "START_FIND_CREATE_CELEBRATIONS":
          return {
            ...state,
            loading: true
          }
        case 'FIND_CREATE_CELEBRATIONS':
          const eventIndex = state.event_lists.findIndex(event_list => event_list.id === action.payload.event_list.id);
          return{
            ...state,
            event_lists: [
              ...state.event_lists.slice(0, eventIndex),
              action.payload.event_list,
              ...state.event_lists.slice(eventIndex + 1),
            ],
            loading: false
          }
        case 'START_DELETE_FRIEND_FROM_LIST':
          return {
            ...state,
            loading: true
          }
        case 'DELETE_FRIEND_FROM_LIST':
          const eventDeleteIndex = state.event_lists.findIndex(event_list => event_list.id === action.payload.event_list.id);
          return {
            ...state,
            event_lists: [
              ...state.event_lists.slice(0, eventDeleteIndex),
              action.payload.event_list,
              ...state.event_lists.slice(eventDeleteIndex + 1),
            ],
            loading: false
          }

    default:
      return state
  }
  return state
}

export default reducer
