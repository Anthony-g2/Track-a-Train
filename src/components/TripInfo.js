import React, { Component } from 'react';

class TripInfo extends Component {
  render() {
      let data = this.props.trip
      let tripData = data.map((d) => {
        return (
        <tr key={d['@destTimeMin']}>
          <td>{d['@origTimeMin']}</td>
          <td>{d['@destTimeMin']}</td>
          <td>{d.leg[0]['@bikeflag']}</td>
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
