import React, { Component } from 'react';
import './style.css'

import Map from './components/Map'
import Navi from './components/Navi'
import AlertContainer from './containers/AlertContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <div className="Alert">
          <AlertContainer />
        </div>
        <div className="Map">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
