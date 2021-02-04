import React from 'react';
import GaugeChart from 'react-gauge-chart'
import { Line } from "react-chartjs-2";




export default class App extends React.Component {

state = {
date: this.props.date,
moisture: this.props.moisture,
temperature: this.props.temprature
}

render() {

  //setting props data
  const {
      temperature,
      moisture,
      date,
      dateDay,
      dateMonth,
      waterLevel,
      temperatureDay,
      temperatureMonth,
      wateredMonth,
      wateredDay,
      watered,
      moisture2
  } = this.props.data

  //Finding the average temprature(formula)
  const calculation = () => {
      let total = 0;
      for (var i = 0; i < temperature.length; i++) {
          total += temperature[i];
      }
      var avg = total / temperature.length;
  }

  //setting dataset for graph
  const data = {
      labels: date,
      datasets: [{
              label: "Temprature",
              data: temperature,
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"
          },
          {
              label: "Soil moisture plant 1",
              data: moisture,
              fill: false,
              borderColor: "#742774"
          },
          {
              label: "Soil moisture plant 2",
              data: moisture2,
              fill: false,
              borderColor: "#742774"
          },
          {
              label: "Water Level",
              data: waterLevel,
              fill: false,
              borderColor: "yellow"
          },
          {
              label: "Plant watered",
              data: watered,
              fill: false,
              borderColor: "green"
          }
      ]
  };

  //return HTML
  return (

    <div className="App">
       <h1> Reports </h1>
       <div id="reportschart">
          <Line data={data} />
       </div>
       <div  id="reportstable">
          <h1> Plant Stats </h1>
          <table class="table">
             <thead>
                <tr>
                   <th scope="col">#</th>
                   <th scope="col">First</th>
                   <th scope="col">Last</th>
                   <th scope="col">Handle</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                   <th scope="row">1</th>
                   <td>Mark</td>
                   <td>Otto</td>
                   <td>@mdo</td>
                </tr>
                <tr>
                   <th scope="row">2</th>
                   <td>Jacob</td>
                   <td>Thornton</td>
                   <td>@fat</td>
                </tr>
                <tr>
                   <th scope="row">3</th>
                   <td colspan="2">Larry the Bird</td>
                   <td>@twitter</td>
                </tr>
             </tbody>
          </table>
       </div>
    </div>

    )
  }
}

//
//
// localstorage.setitem("string" , token)  localstorage.getitem("string" , token)
