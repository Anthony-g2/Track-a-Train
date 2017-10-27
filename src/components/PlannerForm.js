import React, { Component } from "react";
import { Col, Button, Table } from "react-materialize"
import Select from 'react-select';
import TripInfo from './TripInfo'
import 'react-select/dist/react-select.css';


class PlannerForm extends Component {
  constructor(){
    super()
    this.state = {
      station1: "wdub",
      station2: "mont",
      trip: [],
    }
  }

  onSubmit(event){
    event.preventDefault();
    let api = 'https://api.bart.gov/api/sched.aspx?cmd=depart&orig=' + this.state.station1 + '&dest=' + this.state.station2 + '&key=MW9S-E7SL-26DU-VV8V&json=y'
    fetch(api)
    .then(res => {
      return res.json()
    })
    .then( data => {
      this.setState({
        trip: data.root.schedule.request.trip
      })
      console.log(this.state)
    })

  }


  onDepart(val){
    this.setState({
      station1: val.value
    })
  }

  onArrive(val){
    this.setState({
      station2: val.value
    })
  }

  render(){
    let options = [
      { value: '12th',	label: '12th St. Oakland City Center' },
      { value: '16th',	label: '16th St. Mission (SF)' },
      { value: '19th',	label: '19th St. Oakland' },
      { value: '24th',	label: '24th St. Mission (SF)' },
      { value: 'ashb',	label: 'Ashby (Berkeley)' },
      { value: 'balb',	label: 'Balboa Park (SF)' },
      { value: 'bayf',	label: 'Bay Fair (San Leandro)' },
      { value: 'cast',	label: 'Castro Valley' },
      { value: 'civc',	label: 'Civic Center (SF)' },
      { value: 'cols',	label: 'Coliseum' },
      { value: 'colm',	label: 'Colma' },
      { value: 'conc',	label: 'Concord' },
      { value: 'daly',	label: 'Daly City' },
      { value: 'dbrk',	label: 'Downtown Berkeley' },
      { value: 'dubl',	label: 'Dublin/Pleasanton' },
      { value: 'deln',	label: 'El Cerrito del Norte' },
      { value: 'plza',	label: 'El Cerrito Plaza' },
      { value: 'embr',	label: 'Embarcadero (SF)' },
      { value: 'frmt',	label: 'Fremont' },
      { value: 'ftvl',	label: 'Fruitvale (Oakland)' },
      { value: 'glen',	label: 'Glen Park (SF)' },
      { value: 'hayw',	label: 'Hayward' },
      { value: 'lafy',	label: 'Lafayette' },
      { value: 'lake',	label: 'Lake Merritt (Oakland)' },
      { value: 'mcar',	label: 'MacArthur (Oakland)' },
      { value: 'mlbr',	label: 'Millbrae' },
      { value: 'mont',	label: 'Montgomery St. (SF)' },
      { value: 'nbrk',	label: 'North Berkeley' },
      { value: 'ncon',	label: 'North Concord/Martinez' },
      { value: 'oakl',	label: 'OAK Airport' },
      { value: 'orin',	label: 'Orinda' },
      { value: 'pitt',	label: 'Pittsburg/Bay Point' },
      { value: 'phil',	label: 'Pleasant Hill' },
      { value: 'powl',	label: 'Powell St. (SF)' },
      { value: 'rich',	label: 'Richmond' },
      { value: 'rock',	label: 'Rockridge (Oakland)' },
      { value: 'sbrn',	label: 'San Bruno' },
      { value: 'sfia',	label: 'SFO Airport' },
      { value: 'sanl',	label: 'San Leandro' },
      { value: 'shay',	label: 'South Hayward' },
      { value: 'ssan',	label: 'South San Francisco' },
      { value: 'ucty',	label: 'Union City' },
      { value: 'warm',	label: 'Warm Springs/South Fremont' },
      { value: 'wcrk',	label: 'Walnut Creek' },
      { value: 'wdub',	label: 'West Dublin' },
      { value: 'woak',	label: 'West Oakland' }
    ];
    return (
      <Col s={12} l={4} className="left-align">
        <div className="planner">
          <br />
          <p>Depart from:</p>
          <Select
            name="depart-station"
            options={options}
            value={this.state.station1}
            onChange={val => this.onDepart(val)}
            clearable={false}
            searchable={false}
            />
          <br />
          <p>Arrive at:</p>
          <Select
            name="arrive-station"
            options={options}
            value={this.state.station2}
            onChange={val => this.onArrive(val)}
            clearable={false}
            searchable={false}
            />
          <br />
          <Button waves="light" className="blue button" onClick={event => this.onSubmit(event)}>Submit</Button>
        </div>
        <br />
        <div className="planner">
          <Table>
            <thead className="data">
              <tr>
                <th data-field="depart">Depart Time</th>
                <th data-field="arrive">Arrival Time</th>
                <th data-field="bikes">Bikes Allowed</th>
              </tr>
            </thead>
            <TripInfo trip={this.state.trip} />
          </Table>
        </div>
      </Col>
    )
  }
}

export default PlannerForm;
