import React, { Component } from 'react';
import { Row } from 'react-materialize'
import Map from '../components/Map';
import PlannerForm from '../components/PlannerForm'

class InfoContainer extends Component {
  render(){
    return(
      <Row className="infoContainer">
        <PlannerForm />
        <Map />
      </Row>
    )
  }


}

export default InfoContainer;
