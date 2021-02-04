
import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import '../App.css';
import '../dashboard.rtl.css';
import '../dashboard.rtl.css';
import axios from 'axios';
import PlantStatus from './PlantStatus'
import Reports from './Reports'
import PlantDetails from './PlantDetails'
import Register from './Register'
import {
    Link,
    withRouter
} from "react-router-dom";
import DataCenter from './DataCenter'
import ThreeD from './ThreeD'
import GaugeChart from 'react-gauge-chart'
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import socketIOClient from "socket.io-client";
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Redirect
} from 'react-router-dom';



//set URL for post and get requests
const NODE_PLANTS_BASE_URL = 'https://plant-owl.herokuapp.com/plants/601b72c7ebfc916662a038f3';
const NODE_PLANTS_POST_URL = 'https://plant-owl.herokuapp.com/login';
const NODE_REGISTER_POST_URL = 'https://plant-owl.herokuapp.com/register';




class Plants extends React.Component {

  //set state
  state = {
      data: [],
      plants: [],
      plantData: [],

      //Moisture - %
      moisture: [],
      moistureDay: [],
      moistureMonth: [],

      //Moisture2 - %
      moisture2: [],
      moisture2Day: [],
      moisture2Month: [],

      //temperature - c
      temperature: [],
      temperatureDay: [],
      temperatureMonth: [],

      //watered - y/n (boolean)
      watered: [],
      wateredDay: [],
      wateredMonth: [],

      // WaterLevel - Leters
      waterLevel: [],
      waterLevelDay: [],
      waterLevelMonth: [],

      // Timestamp for readings
      date: [],
      dateDay: [],
      dateMonth: [],

      //Set Authorization token
      token: "",
      setToken: "",

      //Current reading
      currentMoisture: [], // - Current moisture %
      currentTemperature: [], // - Current temprature (% out of 40c)
      currentWatered: [], // - Boolean
      currentDate: [], // - Timestamp
      currentWaterLevel: [], // - Water level % out of 4L

      //current time
      curTime: new Date().toLocaleString(),

    }//end set state;


    //getData function
    getData = () => {
      //save jwt authentification code
      const token = localStorage.getItem('jwtToken'); // retrieve token
      axios.defaults.headers.common['Authorization'] = token
      console.log('token', token)
      axios.get(NODE_PLANTS_BASE_URL, {
        headers: {
            'Authorization': token
        }
      })
      .then((res) => {
        this.setState({
          plants: res.data,
          plantData: res.data.data
        }) //save to state

          //moisture
        const moisture = []
        const moistureMonth = []
        const moistureDay = []

        //moisture2
        const moisture2 = []
        const moisture2Month = []
        const moisture2Day = []

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
        let current_moisture2 = ""
        let current_temperature = ""
        let current_watered = ""
        let current_date = ""
        let current_waterlevel = ""

        //date readings
        const day = new Date().getDay()
        var month = new Date().getMonth() + 1

        //values to array
        this.state.plantData.map(data => {
            return (
              waterLevel.push(data.waterLevel),
              moisture.push(data.moisture),
              moisture2.push(data.moisture2),
              temperature.push(data.temperature),
              watered.push(data.watered),
              date.push(data.createdAt)

            )
        })

        //set token
        const token = localStorage.getItem('jwtToken'); // retrieve token
        axios.defaults.headers.common['Authorization'] = token

        //set current moisture
        current_moisture = moisture[moisture.length - 1]
        current_moisture = current_moisture / 100
        //set current moisture
        current_moisture2 = moisture2[moisture2.length - 1]
        current_moisture2 = current_moisture2 / 100
        //set current Temprature
        current_temperature = temperature[temperature.length - 1]
        current_temperature = (current_temperature / 40)
        //set current watered
        current_watered = watered[watered.length - 1]
        //set current length
        current_date = date[date.length - 1]
        //set waterlevel
        current_waterlevel = waterLevel[waterLevel.length - 1]
        current_waterlevel = current_waterlevel / 4

        let stateMonth = ""
        let stateDay = ""
        //values to array
        this.state.plantData.map(data => {
          stateMonth = new Date(data.createdAt)
          stateMonth = stateMonth.getMonth() + 1

          if (stateMonth === month) {
            return (
              waterLevelMonth.push(data.waterLevel),
              moistureMonth.push(data.moisture),
              moisture2Month.push(data.moisture2),
              temperatureMonth.push(data.temperature),
              wateredMonth.push(data.watered),
              dateMonth.push(data.createdAt)
            ) //return
          } //if
        }) //state

          this.state.plantData.map(data => {
              stateDay = new Date(data.createdAt)
              stateDay = stateDay.getDay()
              stateMonth = new Date(data.createdAt)
              stateMonth = stateMonth.getMonth() + 1


              if (stateDay === day && stateMonth === month) {
                  return (
                      waterLevelDay.push(data.waterLevel),
                      moistureDay.push(data.moisture),
                      moisture2Day.push(data.moisture2),
                      temperatureDay.push(data.temperature),
                      wateredDay.push(data.watered),
                      dateDay.push(data.createdAt)
                  ) //return
              } //if
          }) //state



          this.setState({
            plants: res.data,
            plantData: res.data.data,
            moisture: moisture,
            moisture2: moisture2,
            temperature: temperature,
            temperatureDay: temperatureDay,
            temperatureMonth: temperatureMonth,
            watered: watered,
            date: date,
            currentMoisture: current_moisture,
            currentMoisture2: current_moisture2,
            currentTemperature: current_temperature,
            currentWatered: current_watered,
            currentDate: current_date,
            waterLevel: waterLevel,
            currentWaterLevel: current_waterlevel,
            waterLevelMonth: waterLevelMonth,
            moistureMonth: moistureMonth,
            moisture2Month: moisture2Month,
            wateredMonth: wateredMonth,
            dateMonth: dateMonth,
            waterLevelDay: waterLevelDay,
            moistureDay: moistureDay,
            moisture2Day: moisture2Day,
            wateredDay: wateredDay,
            dateDay: dateDay,
            token: token,
            data: res.data
          }) //save to state


      })//end then
     .catch(console.warn);
   }//end Get data




  //run this when component is on this page
  componentDidMount() {
    this.getData()


    setTimeout(this.getData(), 10000)
  }//end componentDidMount


  //Login user
  saveLogin = (email, password) => {
    // POST the secret data to the Rails backend:
    axios.post(NODE_PLANTS_POST_URL, {
        email: email,
        password: password
    })//end .post
    .then((res) => {
        const token = 'Bearer ' + res.data.token;
        console.log("token", token)
        axios.defaults.headers.common['Authorization'] = token;
        localStorage.setItem('jwtToken', token);

        this.setState({
            token: [token]
        });
          window.location.href = "https://reecen96.github.io/plantowl-react-frontend/#/PlantStatus";
    }) // .then
        .catch(console.warn);

  } // saveSecret

  //Register user for new account
  saveRegister = (email, password, username) => {
    // POST the secret data to the Rails backend:
    axios.post(NODE_REGISTER_POST_URL, {
      email: email,
      password: password,
      username: username
    })
    .then((res) => {
        console.log(res)
    }) // .then
    .catch(console.warn)
  } // saveSecret


  render() {

    //Event listener - log out
    document.addEventListener('click', (evt) => {
      if (evt.target.closest('#Logout')) {
          console.log("Logged out!")
          axios.defaults.headers.common['Authorization'] = "";
          localStorage.setItem('jwtToken', 0);
          window.location.href = "https://reecen96.github.io/plantowl-react-frontend/#/Login";


      }
    })//end event listener

    const data = this.state.plantData
    var index = 0

    setTimeout(check, 2000);
    var check = function() {
      if (this.state.token === "") {
        window.location.href = "https://reecen96.github.io/plantowl-react-frontend/#/Login";
        return
    }// end check()
    

  }//end render

  return (
    <div id = "mainbox">
     <div>
        <div>
           <header className="navbar fixed-top flex-md-nowrap p-0 shadow" style={{backgroundColor: '#42c48e'}}>
           <div id="navHeader">
              <img id="header" src="https://i.ibb.co/CBgswKy/Screen-Shot-2021-02-02-at-7-48-51-am.png" alt="plant owl logo" />
           </div>
           <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                 <a className="nav-link" id="Logout">Logout</a>
              </li>
           </ul>
           </header>
           <div className="container-fluid">
              <div className="row">
                 <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                       <ul class="nav flex-column sidebar-nav">

                          <li class="nav-item">
                             <a class="nav-link" href="/plantowl-react-frontend/#/PlantStatus">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                 <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                                </svg>
                                Plant status
                             </a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="/plantowl-react-frontend/#/DataCenter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                                   <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Data center
                             </a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="/plantowl-react-frontend/#/plantdetails">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
                                   <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </svg>
                                Plant details
                             </a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="/plantowl-react-frontend/#/reports">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                   <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Reports
                             </a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="/plantowl-react-frontend/#/ThreeD">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                   <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                                </svg>
                                3D visulisation
                             </a>
                          </li>
                       </ul>
                    </div>
                 </nav>
                 <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                       <h1 className="h2">Dashboard</h1>
                       <div className="btn-toolbar mb-2 mb-md-0">
                          <div className="btn-group me-2">
                             <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                             <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                          </div>
                          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                          <span data-feather="calendar" />
                          This week
                          </button>
                       </div>
                    </div>
                    <div id="renderroute">
                    <Router>
                       <Switch>
                          <Route path="/PlantStatus" exact component={() =>
                          <PlantStatus data = {this.state} />
                          } />
                          <Route path="/Login" exact component={() =>
                          <Login onLoginSubmit={ this.saveLogin } />
                          } />
                          <Route path="/ThreeD" exact component={() =>
                          <ThreeD data = {this.state} />
                          } />
                          <Route path="/DataCenter" exact component={() =>
                          <DataCenter data = {this.state} />
                          } />
                          <Route path="/PlantDetails" exact component={() =>
                          <PlantDetails data = {this.state} />
                          } />
                          <Route path="/Reports" exact component={() =>
                          <Reports data = {this.state} />
                          } />
                          <Route path="/Register" exact component={() =>
                          <Register onRegisterSubmit={ this.saveRegister } />
                          } />
                       </Switch>
                    </Router>
                    </div>
                    <canvas className="my-4 w-100" id="myChart" width={900} height={380} />
                    <div id= "datapage">
                    <h2>Plant date</h2>
                    <div className="table-responsive">
                       <table className="table table-striped table-sm">
                          <thead>
                             <tr>
                                <th> # </th>
                                <th>Post date</th>
                                <th>temperature</th>
                                <th>moisture - Plant 1</th>
                                <th>moisture - Plant 2</th>
                                <th>was watered</th>
                                <th>water remaining</th>
                             </tr>
                          </thead>
                          <tbody>
                             {data.map((item) => (
                             <tr>
                                <td>{index = index + 1}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.temperature}c</td>
                                <td>{item.moisture}%</td>
                                <td>{item.moisture2}%</td>
                                <td>{item.watered}</td>
                                <td>{item.waterLevel}L</td>
                             </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                    </div>
                 </main>
              </div>
           </div>
        </div>
     </div>
    </div>

  );//end retuen

} // render

} //plant export


export default Plants;
