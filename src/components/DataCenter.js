import React from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';


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
      data: [65, 59, 80, 81, 56]
    }
  ]
}


const waterData = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (


                  <div id="BarChart">
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

            //
            // <div id="LineGraph">
            //   <Line
            //     data={tempData}
            //     options={{
            //       title:{
            //         display:true,
            //         text:'Hourly temperature',
            //         fontSize:20
            //       },
            //       legend:{
            //         display:true,
            //         position:'right'
            //       }
            //     }}
            //   />
            // </div>



    )
  }
}
