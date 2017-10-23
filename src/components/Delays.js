import React, { Component } from 'react';
import { Col } from 'react-materialize'

class Delays extends Component {
  render(){
    return (
      <Col s={12} className="statusBar scroll-left">
        <h4>{this.props.alerts}</h4>
      </Col>
    )
  }
}

export default Delays;
