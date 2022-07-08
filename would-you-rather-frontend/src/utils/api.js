import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {

  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(({users, questions}) => ({
    users,
    questions,
  }))
}

export function getUsersData () {

    return  _getUsers().then(data => {
                        return data;
                  }).then(data => data)

}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}