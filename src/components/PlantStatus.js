import React from 'react';
import GaugeChart from 'react-gauge-chart'
import ProgressBar from 'react-bootstrap/ProgressBar'


export default class App extends React.Component {


  render() {
    return (
      <div id="gauges">

         <div id="plantimage">
            <div id= "plant1"> {this.props.data.currentMoisture*100}% </div>
            <div id= "plant2"> {this.props.data.currentMoisture2*100}%  </div>
            <div id= "water"> {this.props.data.currentWaterLevel*4}L </div>
            <img id ="plantpic" src="https://i.ibb.co/rHpc49z/Screen-Shot-2021-02-04-at-11-50-20-am.png" alt="plan.png"/>
         </div>
         <div id="gaugesmove">
            <div class="row">
               <div id="plantstatus">
                  <div class="row">
                     <div class="col">
                        <GaugeChart id="gauge-chart6"
                           animate={false}
                           nrOfLevels={30}
                           percent={this.props.data.currentTemperature}
                           needleColor="#345243"  />
                        Temprature
                     </div>
                     <div class="col">
                        <GaugeChart id="gauge-chart6"
                           animate={false}
                           nrOfLevels={30}
                           percent={this.props.data.currentMoisture}
                           needleColor="#345243" />
                        Soil moisture sensor - plant 1
                     </div>
                     <div class="col">
                        <GaugeChart id="gauge-chart6"
                           animate={false}
                           nrOfLevels={30}
                           percent={this.props.data.currentMoisture2}
                           needleColor="#345243"  />
                        Soil moisture sensor - plant 2
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-8">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <ProgressBar variant="success" now={this.props.data.currentMoisture*100} />
                        Need to be watered - plant 1
                        <br/>
                        <br/>
                        <br/>
                        <ProgressBar variant="success" now={this.props.data.currentMoisture2*100} />
                        Need to be watered - plant 2
                        <br/>
                        <br/>
                        <br/>
                        <ProgressBar variant="info" now={this.props.data.currentWaterLevel*100} />
                        Water available
                        <br/>
                        <br/>
                        <br/>
                        <ProgressBar variant="warning" now={this.props.data.currentTemperature*100} />
                        Optimal temprature for plant growth
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <ProgressBar variant="warning" now={this.props.data.currentTemperature*100} />
                        Overall greenhouse rating
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

    )
  }
}
