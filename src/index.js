import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/manageUser';
import friendsReducer from './reducers/manageFriends';
import messagesReducer from './reducers/manageMessages';
import chatsReducer from './reducers/manageChats'
import subscriptionsReducer from './reducers/manageSubscriptions';
import discoveryReducer from './reducers/manageDiscovery';
import songsReducer from './reducers/manageSongs';
import genreReducer from './reducers/manageGenres';
import instrumentsReducer from './reducers/manageInstruments';

const rootReducer = combineReducers({
  user: userReducer,
  friends: friendsReducer,
  messages: messagesReducer,
  chats: chatsReducer,
  subscriptions: subscriptionsReducer,
  discovery: discoveryReducer,
  songs: songsReducer,
  genres: genreReducer,
  instruments: instrumentsReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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
