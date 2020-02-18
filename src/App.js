import React, {Component} from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import {ReactReduxContext} from "react-redux";

class App extends Component {

    render() {
        const { login } = this.props.match.params;
        return (
            <ReactReduxContext.Consumer>
                {( {store} ) =>
                    {
                        return (
                            <div id="root">
                                <div className="main">
                                    <Header store={store}/>
                                    <Timeline login={login} store={store}/>
                                </div>
                            </div>
                        )
                    }
                }
            </ReactReduxContext.Consumer>
        );
    }

}

export default App;
