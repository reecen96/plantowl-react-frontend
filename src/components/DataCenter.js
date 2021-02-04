import React from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'




export default class App extends React.Component {

  //Set state
  state = {
     isActive: false,
     temperature:  this.props.data.temperature,
     moisture:  this.props.data.moisture,
     date:  this.props.data.date,
     waterLevel:  this.props.data.waterLevel,
     watered: this.props.data.watered
   }


   componentDidMount(){

   //Click handler for drop down menu
   //Day
   document.addEventListener('click', (evt) => {
      if (evt.target.closest('#Day')) {
        console.log('#Day')
        this.setState({date:this.props.data.dateDay, temperature: this.props.data.temperatureDay, moisture: this.props.data.moistureDay, waterLevel: this.props.data.waterLevelDay, watered: this.props.wateredDay
        })
       return;
    }
  })//end click handler

  //month
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('#Month')) {
      this.setState({date:this.props.data.dateMonth, temperature: this.props.data.temperatureMonth, moisture: this.props.data.moistureMonth, waterLevel: this.props.data.waterLevelMonth, watered: this.props.wateredMonth})
      console.log('#Month')
      return;
    }
  })// end click handler

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('#All')) {
    this.setState({date:this.props.data.date, temperature: this.props.data.temperature, moisture: this.props.data.moisture, waterLevel: this.props.data.waterLevel, watered: this.props.watered})
    console.warn('#All');
    return;
    }
  })//end click handler

}//End componentDidMount

render() {
  //pulling props.data
  const {moisture, moistureDay, moistureMonth, temperature, temperatureDay, temperatureMonth, watered, wateredDay, wateredMonth, date, dateDay, dateMonth, waterLevel, waterLevelDay, waterLevelMonth} = this.props.data

  //population data for graphs
  //temprature data
  const temperatureData = {
    labels: this.state.date,
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.state.temperature
      }
    ]
  }

  //moisture data
  const moistureData = {
    labels: this.state.date,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.state.moisture
      }
    ]
  }

  //water data
  const waterData = {
    labels: date,
    datasets: [
      {
        label: 'Has been watered water',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.state.watered
      }
    ]
  }

  //water level data
  const waterLevelData = {
    labels: date,
    datasets: [
      {
        label: 'Remaining water',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.state.waterLevel
      }
    ]
  }



  //return JSX
  return (
    <div class="container">

    <h1 id="heading"> Data center </h1>

    <div id="datacenter">
      <div class="row row-cols-2">
        <div class="col">
          <div class="p-3 border bg-light">
            <div id="BarChart">
              <Bar
                data={temperatureData}
                options={{
                  title:{
                    display:true,
                    text:'Hourly temperature',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            <div id="LineGraph">
              <Line
                data={moistureData}
                options={{
                  title:{
                    display:true,
                    text:'Hourly moisture',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            <Line
              data={waterLevelData}
              options={{
                title:{
                  display:true,
                  text:'Water level available',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
        </div>
      <div class="col">
        <div class="p-3 border bg-light">
          <Line
            data={waterData}
            options={{
              title:{
                display:true,
                text:'Plant has been watered',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
        </div>
        </div>
      </div>
      <br/>
      <DropdownButton id="dropdown-basic-button" title="Data period">
      <Dropdown.Item id="Day">Day</Dropdown.Item>
      <Dropdown.Item id="Month">Month</Dropdown.Item>
      <Dropdown.Item id="All">All</Dropdown.Item>
      </DropdownButton>
      </div>
    )//end return
  }//end render
}//end component
