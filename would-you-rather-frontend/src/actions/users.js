export const RECEIVE_USERS = 'RECEIVE_USERS'
export const HANDLE_USERS = 'HANDLE_USERS'

export function receiveUsers (users) {
    return {
      type: RECEIVE_USERS,
      users,
    }
  }


  export function handleUsers (users) {
    return {
      type: HANDLE_USERS,
      users,
    }
  }