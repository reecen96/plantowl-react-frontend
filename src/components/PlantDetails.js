import React from 'react';



export default class App extends React.Component {
  render() {
    return (
      <div>
      <div id="arduino">
            <h1 id="heading"> Arduino circuit board </h1>
            <img src="https://i.ibb.co/r5qWsLd/Screen-Shot-2021-02-04-at-9-05-30-pm.png
      " alt="arduino map" />
            <br />
            <h1> Data structure </h1>
            <img src="https://i.ibb.co/SV95pgf/Screen-Shot-2021-02-04-at-9-22-40-pm.png" alt="background" />
            <br />
            <h2> Data collected from Arduino </h2>
            <div>
              - Moisture sensor from plant 1 <br />
              - Moisture sensor from plant 2 <br />
              - Water remaining in reservoir <br />
              - Temperature <br />
              - Plant watering times <br /> <br />
            </div>
            <h2> Functionality of the Arduino </h2>
            <div>
              The Arduino has been programmed in 'a c/c++' to post data to a server cyclically and water plants when  their soil moisture falls below a certain %. <br/>
              On a specified interval the Arduino collects data (soil moisture, water level, temperature) and posts it as a JSON request to a Node.js/React/Mongodb server.  <br/>
              This date is then access from a React front end where the data is graphed and analysed.
            </div>
          </div>
          </div>
    );
  }
}
