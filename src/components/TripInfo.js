import React, { Component } from 'react';
import { Table } from 'react-materialize'

class TripInfo extends Component {
  render() {
      let data = this.props.trip
      let tripData = data.map((d) => {
        return (
        <tr>
         <td key={d['@origTimeMin']}>{d['@origTimeMin']}</td>
         <td key={d['@destTimeMin']}>{d['@destTimeMin']}</td>
        </tr>)
      }
     )

      return (
        <tbody>
          { tripData }
        </tbody>
      );
    }
  }


export default TripInfo;
