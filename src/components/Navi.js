import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


class Navi extends Component {
  render(){
    return (
      <Navbar brand="Track-a-Train" right>
      	<NavItem href='#'>About</NavItem>
      	<NavItem href='#'>Technologies</NavItem>
      </Navbar>
    )
  }


}

export default Navi;
