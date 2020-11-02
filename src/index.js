import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';
import friendsReducer from './reducers/friendsReducer';
import messagesReducer from './reducers/messagesReducer';
import chatsReducer from './reducers/chatsReducer'
import subscriptionsReducer from './reducers/subscriptionsReducer';
import discoveryReducer from './reducers/discoveryReducer';
import genreReducer from './reducers/genreReducer';
import instrumentsReducer from './reducers/instrumentsReducer';

const appReducer = combineReducers({
  user: userReducer,
  friends: friendsReducer,
  messages: messagesReducer,
  chats: chatsReducer,
  subscriptions: subscriptionsReducer,
  discovery: discoveryReducer,
  genres: genreReducer,
  instruments: instrumentsReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

const store = createStore(
  rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
