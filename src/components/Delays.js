import React, { Component } from 'react';
import { Col } from 'react-materialize'
import logo from './Bart.png'

class Delays extends Component {
  render(){
    return (
      <Col s={12} className="statusBar scroll-left">
        <h4><img src={logo} className="logo1" alt="bart_train" />{this.props.alerts}<img src={logo} className="logo" alt="bart_train" /></h4>
      </Col>
    )
  }
}

export default Delays;
