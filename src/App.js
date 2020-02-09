import React, {Component} from 'react';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import TimelineStore from "./logics/TimelineStore";

const timelineStore = new TimelineStore([]);

class App extends Component {


    render() {
        const { login } = this.props.match.params
        return (
            <div id="root">
                <div className="main">
                    <Header />
                    <Timeline login={login} store={timelineStore}/>
                </div>
            </div>
        );
    }

}

export default App;
