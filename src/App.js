import React, {Component} from 'react';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import {timeline} from './reducers/timeline'
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';

const store = createStore(timeline, applyMiddleware(thunkMiddleware));

class App extends Component {

    render() {
        const { login } = this.props.match.params
        return (
            <div id="root">
                <div className="main">
                    <Header />
                    <Timeline login={login} store={store}/>
                </div>
            </div>
        );
    }

}

export default App;
