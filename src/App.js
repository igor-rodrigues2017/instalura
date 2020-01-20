import React from 'react';
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';

function App() {
  return (
    <div id="root">
      <div className="main">
          <Header />
          <Timeline />
      </div>
    </div>
  );
}

export default App;
