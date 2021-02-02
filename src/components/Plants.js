
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
import socketIOClient from "socket.io-client";



// const NODE_PLANTS_BASE_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d';
// const NODE_PLANTS_BASE_URL = 'https://plant-owl.herokuapp.com/plants/601234c67a4e04b4433cda6d';
const NODE_PLANTS_BASE_URL = 'https://plant-owl.herokuapp.com/plants/601234c67a4e04b4433cda6d';
const NODE_PLANTS_POST_URL = 'http://localhost:3000/plants/601234c67a4e04b4433cda6d/data';




class Plants extends React.Component {

state = {
  data: [],
  plants: [],
  plantData: [],

  //Moisture - %
  moisture: [],
  moistureDay: [],
  moistureWeek: [],
  moistureMonth: [],

  //temperature - c
  temperature: [],
  temperatureDay: [],
  temperatureWeek: [],
  temperatureMonth: [],

  //watered - y/n (boolean)
  watered: [],
  wateredDay: [],
  wateredWeek: [],
  wateredMonth: [],

  // WaterLevel - Leters
  waterLevel: [],
  waterLevelDay: [],
  waterLevelWeek: [],
  waterLevelMonth: [],

  // Timestamp for readings
  date: [],
  dateDay: [],
  dateWeek: [],
  dateMonth: [],

  //Current reading
  currentMoisture: [], // - Current moisture %
  currentTemperature: [], // - Current temprature (% out of 40c)
  currentWatered: [],  // - Boolean
  currentDate: [],  // - Timestamp
  currentWaterLevel: [], // - Water level % out of 4L

  //current time
  curTime: new Date().toLocaleString()

};

useEffect = () => {
    const socket = socketIOClient(NODE_PLANTS_BASE_URL);
    socket.on("FromAPI", data => {
      console.log("DATA!!!", data)
    });
  };



//getData function
getData = () => {
  axios.get(NODE_PLANTS_BASE_URL)

  .then( (res) => {

    console.log('response', res.data)
    this.setState({plants: res.data, plantData: res.data.data}) //save to state
    console.log('plantData', this.state.plantData)

    //moisture
    const moisture = []
    const moistureMonth = []
    const moistureDay = []

    //temprature
    const temperature = []
    const temperatureMonth = []
    const temperatureDay = []

    //watered
    const watered = []
    const wateredMonth = []
    const wateredDay = []

    //date
    const date = []
    const dateMonth = []
    const dateDay = []

    //waterLevel
    const waterLevel = []
    const waterLevelMonth = []
    const waterLevelDay = []

    //current readings
    let current_moisture = ""
    let current_temperature = ""
    let current_watered = ""
    let current_date = ""
    let current_waterlevel = ""

    //date readings
    const day = new Date().getDay()
    var month = new Date().getMonth()+1


    //values to array
    this.state.plantData.map(data => {
      return(
      waterLevel.push(data.waterLevel),
      moisture.push(data.moisture),
      temperature.push(data.temperature),
      watered.push(data.watered),
      date.push(data.createdAt)

    )
    })

    //set current moisture
     current_moisture = moisture[moisture.length-1]
     current_moisture = current_moisture/100
    //set current Temprature
     current_temperature = temperature[temperature.length-1]
     current_temperature = (current_temperature/40)
     //set current watered
     current_watered = watered[watered.length-1]
     //set current length
     current_date = date[date.length-1]
     //set waterlevel
     current_waterlevel = waterLevel[waterLevel.length-1]
     current_waterlevel = current_waterlevel/4

    let stateMonth = ""
    let stateDay = ""
     //values to array
     this.state.plantData.map(data => {
        stateMonth = new Date(data.createdAt)
        stateMonth = stateMonth.getMonth()+1

        if(stateMonth === month){
           return(
           waterLevelMonth.push(data.waterLevel),
           moistureMonth.push(data.moisture),
           temperatureMonth.push(data.temperature),
           wateredMonth.push(data.watered),
           dateMonth.push(data.createdAt)
         )//return
       }//if
     })//state

     this.state.plantData.map(data => {
        stateDay = new Date(data.createdAt)
        stateDay = stateDay.getDay()
        stateMonth = new Date(data.createdAt)
        stateMonth = stateMonth.getMonth()+1


        if(stateDay === 2 && stateMonth === 2){
           return(
           waterLevelDay.push(data.waterLevel),
           moistureDay.push(data.moisture),
           temperatureDay.push(data.temperature),
           wateredDay.push(data.watered),
           dateDay.push(data.createdAt)
         )//return
       }//if
     })//state



  this.setState({plants: res.data, plantData: res.data.data, moisture: moisture, temperature: temperature, watered: watered, date: date, currentMoisture: current_moisture, currentTemperature: current_temperature, currentWatered: current_watered, currentDate: current_date, waterLevel: waterLevel, currentWaterLevel: current_waterlevel, waterLevelMonth: waterLevelMonth,moistureMonth: moistureMonth, wateredMonth:wateredMonth, dateMonth:dateMonth ,waterLevelDay: waterLevelDay,moistureDay: moistureDay, wateredDay:wateredDay, dateDay:dateDay  ,data: res.data}) //save to state

    // console.log('plantData', this.state.plantData)
    // console.log('this.state.moisture', this.state.moisture)
    console.log('this.state.temperature', this.state.temperature)
    // console.log('this.state.watered', this.state.watered)
    // console.log('this.state.createdAt', this.state.date)
    // console.log('this.state.waterLevel', this.state.waterLevel)
    console.log('this.state.currentTemperature', this.state.currentTemperature)
    // console.log('this.state.currentWatered', this.state.currentWatered)
    // console.log('this.state.currentWaterlevel', this.state.currentWaterLevel)
    // console.log('this.state.moistureDay', this.state.moistureDay)
    // console.log('this.state.moistureDay', this.state.moistureMonth)
    console.log('day',day)
    console.log('month',month)

    console.log('temperatureDay', this.state.temperatureDay)
    console.log('temperatureMonth', this.state.temperatureWeek)
    console.log('waterLevelDay', this.state.waterLevelDay)
    console.log('waterLevelMonth', this.state.waterLevelDay)
    console.log('moistureDay', this.state.moistureDay)
    console.log('moistureMonth', this.state.moistureMonth)
    console.log('wateredDay', this.state.wateredDay)
    console.log('wateredMonth', this.state.wateredMonth)

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
    // this.useEffect()
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
