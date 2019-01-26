import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import memes from './reducers/index';
import myMemes from './reducers/myMemes';




const rootReducer = combineReducers({
    getMemes: memes,
    myMemes: myMemes,
})



const store = createStore(rootReducer, applyMiddleware(thunk));


store.subscribe(()=>console.log('store', store.getState()));





ReactDOM.render(
<Provider
    store = {store}>
    <App/>
</Provider>, document.getElementById('root'))
