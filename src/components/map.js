import React, { Component } from 'react';
import map from './BART_cc_map.png'
import { Col } from 'react-materialize'

class Map extends Component {
  render () {
    return (
      <Col s={12} l={8} className="right-align map">
        <img src={map} className="z-depth 1" alt="bart_map"/>
      </Col>
    )
  }


}

export default Map;
