import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


class Navi extends Component {
  render(){
    return (
      <Navbar brand="Trip Planner" right>
      	<NavItem href='/'>Refresh Data</NavItem>
      </Navbar>
    )
  }


}

export default Navi;
