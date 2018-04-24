import React, { Component } from 'react';

import './App.less';

import TwitterBar from './Components/TwitterBar/TwitterBar.component';
import FacebookBar from './Components/FacebookBar/FacebookBar.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TwitterBar/>
        <FacebookBar/>
      </div>
    );
  }
}

export default App;
