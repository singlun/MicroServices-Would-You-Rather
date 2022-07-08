import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { handleUsersData }  from './actions/shared'

const store = createStore(reducer, middleware);

store.dispatch(handleUsersData());

ReactDOM.render(
        <Provider store={store}>
            <App />          
        </Provider>
        ,
    document.getElementById('root')
  );