import React from 'react';
import Plot from 'react-plotly.js'


class ThreeD extends React.Component {

  //set state
  state = {
      index: 0
  }

  render() {
    //set props.data
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
    
    console.log("temprature", temperature)

    //set index values for graphing
    const index = []
    var i = 1
    date.map(data => {
        i = i + 1
        index.push(i)

    })


    return (
      <Plot
        data={[
          {
            x: index,
            y: date,
            z: temperature,
            mode: 'markers',
            type:'scatter3d',
            name: 'temperature',
          },
          {
            x: index,
            y: date,
            z: moisture,
            mode: 'markers',
            type:'scatter3d',
            name: 'moisture plant 1',

          },
          {
            x: index,
            y: date,
            z: waterLevel,
            mode: 'markers',
            type:'scatter3d',
            name: 'Water Level',

          },
          {
            x: index,
            y: date,
            z: moisture2,
            mode: 'markers',
            type:'scatter3d',
            name: 'moisture plant 2',

          },
          {
            x: index,
            y: date,
            z: watered,
            mode: 'markers',
            type:'scatter3d',
            name: 'plants were watered',

          },
        ]}
        layout={{
          height: 800,
          width: 1200,
          title: `Plant data`,
        }}
        onRelayout={(figure) => console.log(figure)}
      />
    );//return
  }//render
}//react componenet


export default ThreeD;
