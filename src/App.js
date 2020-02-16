import React, {Component} from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import {timeline} from './reducers/timeline';
import {notifyError} from "./reducers/notify";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({timeline, notifyError});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

class App extends Component {

    render() {
        const { login } = this.props.match.params
        return (
            <div id="root">
                <div className="main">
                    <Header store={store}/>
                    <Timeline login={login} store={store}/>
                </div>
            </div>
        );
    }

}

export default App;
