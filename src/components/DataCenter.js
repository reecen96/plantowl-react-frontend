import React from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';







export default class App extends React.Component {


  render() {
    const { temperature, moisture } = this.props.data
    const tempData = {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: temperature
        }
      ]
    }


    const moistureData = {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: moisture
        }
      ]
    }

    return (

      <div class="container">
  <div id="datacenter">
  <div class="row row-cols-2">
    <div class="col"><div id="BarChart">
      <Bar
        data={tempData}
        options={{
          title:{
            display:true,
            text:'Hourly watering',
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

    <div class="col"><div id="LineGraph">
      <Line
        data={moistureData}
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
    </div></div>
    <div class="col"></div>
    <div class="col">Column</div>
  </div>
  </div>
</div>







    )
  }
}
