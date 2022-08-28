export function manageFriends(state = { friends: [] }, action) {
  let updatedFriends = [...state.friends]
  switch (action.type) {
    case "friends/add":
      return ({
        friends: [...updatedFriends,
        {
          name: action.payload.name,
          hometown: action.payload.hometown,
          id: action.payload.id
        }
        ]
      })
    case "friends/remove":
      return ({
    friends: updatedFriends.filter(friend => friend.id !== action.payload)
    })
    default:
      return state
  }
}