
import React from 'react';
import '../App.css';
import axios from 'axios';
import PlantForm from './PlantForm'
import PlantStatus from './PlantStatus'
import Reports from './Reports'
import PlantDetails from './PlantDetails'
import { Link, withRouter } from "react-router-dom";
import DataCenter from './DataCenter'
import GaugeChart from 'react-gauge-chart'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const NODE_PLANTS_BASE_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d';
const NODE_PLANTS_POST_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d/data';




class Plants extends React.Component {

state = {
  plants: [],
  plantData: [],
  moisture: [],
  temperature: [],
  watered: []

};


//run this when component is on this page
  componentDidMount(){

    axios.get(NODE_PLANTS_BASE_URL)

    .then( (res) => {

      console.log('response', res.data)
      this.setState({plants: res.data, plantData: res.data.data}) //save to state
      console.log('plantData', this.state.plantData)

      const moisture = []
      const temperature = []
      const watered = []

      //adding moisture to array
      this.state.plantData.map(data => {
        return(
        moisture.push(data.moisture)
      )
      })

      //adding temperature to array
      this.state.plantData.map(data => {
        return(
        temperature.push(data.temperature)
      )
      })

      //adding watered? to array
      this.state.plantData.map(data => {
        return(
        watered.push(data.watered)
      )
      })

      this.setState({plants: res.data, plantData: res.data.data, moisture: moisture, temperature: temperature, watered: watered}) //save to state
      console.log('plantData', this.state.plantData)

      console.log('this.state.moisture', this.state.moisture)
      console.log('this.state.temp', this.state.temperature)
      console.log('this.state.watered', this.state.watered)


    } )
    .catch(console.warn);

  }// component di mount



  saveData = (content) => {
    console.log('<plant> saveData()', {content})
    // POST the data to the NODE.js backend
    axios.post(NODE_PLANTS_POST_URL, { moisture: content })
      .then((res) => {
        console.log('response from POST:', res.data)
      })
      .catch(console.warn)

  } //saveData



  render(){

    return (

      <div className="App">
      <Router>
      <Switch>
        <Route path="/PlantStatus" exact component={() => <PlantStatus />} />
        <Route path="/DataCenter" exact component={() => <DataCenter />} />
        <Route path="/PlantDetails" exact component={() => <PlantDetails />} />
        <Route path="/Reports" exact component={() => <Reports />} />
      </Switch>
      </Router>



      </div>


    );

  } // render

} //plant export


export default Plants;


// SOURCES
// guage https://www.npmjs.com/package/react-gauge-chart
