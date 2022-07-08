import { users } from '../utils/_DATA.js'

export const getUsers = () => {
       return new Promise((res, _rej) => {
              setTimeout(() => res({...users}), 1000)
            })
}

