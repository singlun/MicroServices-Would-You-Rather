import { getInitialData, getUsersData } from '../utils/api'
import { receiveUsers } from './users'
import { handleUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './autheduser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users)); 
                dispatch(setAuthedUser(sessionStorage.getItem('AUTHED_ID'))); 
                dispatch(receiveQuestions(questions));   
                dispatch(hideLoading())   
            })            
    }
} 

export function handleUsersData() {
    return (dispatch) => {
        return getUsersData()
            .then(users => {
                dispatch(handleUsers(users.data));   
            })            
    }
}  
