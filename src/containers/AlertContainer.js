import React, { Component } from 'react';
import Delays from '../components/Delays';
import { Row } from 'react-materialize'

class AlertContainer extends Component {
  constructor(){
    super();
    this.state = {
      alerts: [],
    };

  }

  componentDidMount(){

    fetch('https://api.bart.gov/api/bsa.aspx?cmd=bsa&key=MW9S-E7SL-26DU-VV8V&json=y')
    .then( res => {
      return res.json()
    }).then( data => {
      this.setState({
        alerts: data.root.bsa["0"].description["#cdata-section"],
      })
      console.log('state', this.state.alerts)
    });

  }

  render(){
    return(
      <Row className="alertsContainer scroll-left">
        <Delays
          alerts={this.state.alerts} />
      </Row>
    )
  }



}
 export default AlertContainer;
