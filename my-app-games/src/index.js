import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";

rerenderEntireTree(state);
