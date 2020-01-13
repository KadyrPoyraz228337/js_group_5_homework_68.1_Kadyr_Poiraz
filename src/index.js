import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./store/reducer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {saveCounter} from "./store/action";

export const store = createStore(reducer,applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    saveCounter(store.getState().counter)
});

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));
