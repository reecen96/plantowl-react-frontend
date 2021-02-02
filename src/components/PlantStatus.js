import React from 'react';
import GaugeChart from 'react-gauge-chart'



export default class App extends React.Component {


  render() {
    return (

        <div class="container">
        <div id="plantstatus">
          <div class="row">
            <div class="col">
            <GaugeChart id="gauge-chart6"
            animate={false}
            nrOfLevels={15}
            percent={this.props.data.currentTemperature}
            needleColor="#345243"  />
            Temprature
            </div>
            <div class="col">
            <GaugeChart id="gauge-chart6"
            animate={false}
            nrOfLevels={15}
            percent={this.props.data.currentMoisture}
            needleColor="#345243" />
            Soil moisture
            </div>
              <div class="col">
              <GaugeChart id="gauge-chart6"
              animate={false}
              nrOfLevels={15}
              percent={this.props.data.currentWaterLevel}
              needleColor="#345243"  />
              Water level
              </div>
            <div class="col">
            <GaugeChart id="gauge-chart6"
              animate={false}
              nrOfLevels={15}
              percent={0.56}
              needleColor="#345243" />
              Sunlight
            </div>
          </div>
          <div class="row">
            <div class="col-8"></div>
            <div class="col-4"></div>
          </div>
        </div>


        </div>//#plantstatus

    )
  }
}
