import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage} from "./redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
