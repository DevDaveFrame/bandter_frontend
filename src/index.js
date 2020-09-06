import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/manageUser';
import messagesReducer from './reducers/manageMessages';
import chatsReducer from './reducers/manageChats'
import subscriptionsReducer from './reducers/manageSubscriptions';
import discoveryReducer from './reducers/manageDiscovery';
import songsReducer from './reducers/manageSongs';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
  chats: chatsReducer,
  subscriptions: subscriptionsReducer,
  discovery: discoveryReducer,
  songs: songsReducer
})

const store = createStore(
  rootReducer,
    applyMiddleware(thunk)
)

// compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ 
//   && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

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
