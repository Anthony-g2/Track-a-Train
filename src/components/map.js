import React, { Component } from 'react';
import map from './BART_cc_map.png'

class Map extends Component {
  render () {
    return (
      <div className="map">
        <img src={map} className="z-depth 1" alt="bart_map"/>
      </div>
    )
  }


}

export default Map;
