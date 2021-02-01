
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


// const NODE_PLANTS_BASE_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d';
const NODE_PLANTS_BASE_URL = 'https://plant-owl.herokuapp.com/plants/601234c67a4e04b4433cda6d';
const NODE_PLANTS_POST_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d/data';




class Plants extends React.Component {

state = {
  data: [],
  plants: [],
  plantData: [],
  moisture: [],
  temperature: [],
  watered: [],
  date: [],
  currentMoisture: [],
  currentTemperature: [],
  currentWatered: [],
  currentDate: []


};




//getData function
getData = () => {
  axios.get(NODE_PLANTS_BASE_URL)

  .then( (res) => {

    console.log('response', res.data)
    this.setState({plants: res.data, plantData: res.data.data}) //save to state
    console.log('plantData', this.state.plantData)

    const moisture = []
    const temperature = []
    const watered = []
    const date = []
    let current_moisture = ""
    let current_temperature = ""
    let current_watered = ""
    let current_date = ""


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
    //adding createdat to array
    this.state.plantData.map(data => {
      return(
      date.push(data.createdAt)
    )
    })

     current_moisture = moisture[moisture.length-1]
     current_moisture = current_moisture/100
     current_temperature = temperature[temperature.length-1]
     current_temperature = (current_temperature/40)
     current_watered = watered[watered.length-1]
     current_date = date[date.length-1]

  this.setState({plants: res.data, plantData: res.data.data, moisture: moisture, temperature: temperature, watered: watered, date: date, currentMoisture: current_moisture, currentTemperature: current_temperature, currentWatered: current_watered, currentDate: current_date, data: res.data}) //save to state

    console.log('plantData', this.state.plantData)
    console.log('this.state.moisture', this.state.moisture)
    console.log('this.state.temp', this.state.temperature)
    console.log('this.state.watered', this.state.watered)
    console.log('this.state.createdAt', this.state.date)
    console.log('this.state.currentTemperature', this.state.currentTemperature)
    console.log('this.state.currentWatered', this.state.currentWatered)

  } )
  .catch(console.warn);
}


  saveData = (content) => {
    console.log('<plant> saveData()', {content})
    // POST the data to the NODE.js backend
    axios.post(NODE_PLANTS_POST_URL, { moisture: content })
      .then((res) => {
        console.log('response from POST:', res.data)
      })
      .catch(console.warn)

  } //saveData


  //run this when component is on this page
  componentDidMount(){
    this.getData()
  }




  render(){

    return (



      <div className="App">
      <Router>
      <Switch>
        <Route path="/PlantStatus" exact component={() => <PlantStatus data = {this.state} />} />
        <Route path="/DataCenter" exact component={() => <DataCenter data = {this.state} />} />
        <Route path="/PlantDetails" exact component={() => <PlantDetails data = {this.state} />} />
        <Route path="/Reports" exact component={() => <Reports data = {this.state} />} />
      </Switch>
      </Router>
      </div>


    );

  } // render

} //plant export


export default Plants;


// SOURCES
// guage https://www.npmjs.com/package/react-gauge-chart
