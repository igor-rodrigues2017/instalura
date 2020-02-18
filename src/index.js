import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import {Provider} from "react-redux";
import {timeline} from './reducers/timeline';
import {notifyError} from "./reducers/notify";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({timeline, notifyError});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	(
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path='/timeline/:login' component={App} />
					<PrivateRoute path='/timeline' component={App} />
					<Route path='/logout' component={Logout} />
					<Route path='/' component={Login} />
				</Switch>
			</BrowserRouter>
		</Provider>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
