import React, { Component } from 'react';
import './style.css'

import Navi from './components/Navi'
import InfoContainer from './containers/InfoContainer'
import AlertContainer from './containers/AlertContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <AlertContainer />
        <InfoContainer />
      </div>
    );
  }
}

export default App;
