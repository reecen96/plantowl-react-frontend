import React from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';



const items = [
        {
            value: 'Day'
        },
        {
            value: 'Month'
        },
        {
            value: 'All'
        }
    ];



export default class App extends React.Component {
  state = {
     isActive: false,
     temperature: "",
     moisture: "",
     date: "",
     waterLevel:" "

   }



   componentDidMount(){


       const { isActive } = this.state;
       //Temprature//
       document.addEventListener('click', (evt) => {
         if (evt.target.closest('#Daytemp')) {
         this.setState({date:this.props.data.dateDay, temperature: this.props.data.moistureDay})
           return;

         }
         if (evt.target.closest('#Monthtemp')) {
           this.setState({date:this.props.data.dateMonth, temperature: this.props.data.moistureMonth})
          console.log('#month')
           return;
         }
         if (evt.target.closest('#Alltemp')) {
           this.setState({date:this.props.data.date, temperature: this.props.data.moisture})
           console.warn('All');
           return;
         }
         //moisture
         if (evt.target.closest('#Daymoist')) {
         this.setState({date:this.props.data.dateDay, moisture: this.props.data.moistureDay})
           return;

         }
         if (evt.target.closest('#Monthmoist')) {
           this.setState({date:this.props.data.dateMonth, moisture: this.props.data.moistureMonth})
          console.log('#month')
           return;
         }
         if (evt.target.closest('#Allmoist')) {
           this.setState({date:this.props.data.date, moisture: this.props.data.moisture})
           console.warn('All');
           return;
         }
         //water level
         if (evt.target.closest('#Daylvl')) {
         this.setState({date:this.props.data.dateDay, waterLevel: this.props.data.waterLevelDay})
           return;

         }
         if (evt.target.closest('#Monthlvl')) {
           this.setState({date:this.props.data.dateMonth, waterLevel: this.props.data.waterLevelMonth})
          console.log('#month')
           return;
         }
         if (evt.target.closest('#Alllvl')) {
           this.setState({date:this.props.data.date, waterLevel: this.props.data.waterLevelAll})
           console.warn('All');
           return;
         }



           if (evt.target.closest('#dropdownHeader')) {
             console.warn('clicked the header toggle');
             this.setState({isActive: !isActive});
           }

         });
     }

  render() {

    const { temperature, moisture, date, dateDay, dateMonth, waterLevel, temperatureDay, temperatureMonth, wateredMonth, wateredDay } = this.props.data
    const tempData = {
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

    const waterData = {
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


    let { isActive } = this.state;



    return (
// Temprature
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
/////////////////////////////////////////////////////////////////////////
      <div id="container">
          <div id="dropdownHeader">period</div>
          {isActive && (
            <div id="dropdownContent">
              {items.map((item) => (
                <div id={item.value+"temp"} >
                  {item.value}
                </div>
              ))}
            </div>
          )}
      </div>
      ////////////////////////////////////////////////////////////////////////
// Moisture

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
      /////////////////////////////////////////////////////////////////////////
            <div id="container">
                <div id="dropdownHeader">period</div>
                {isActive && (
                  <div id="dropdownContent">
                    {items.map((item) => (
                      <div id={item.value+"moist"} >
                        {item.value}
                      </div>
                    ))}
                  </div>
                )}
            </div>
            ////////////////////////////////////////////////////////////////////////
    // Remaining Water
    </div></div>
    <div class="col">
    <Line
      data={waterData}
      options={{
        title:{
          display:true,
          text:'Remaining water',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />

    /////////////////////////////////////////////////////////////////////////
          <div id="container">
              <div id="dropdownHeader">period</div>
              {isActive && (
                <div id="dropdownContent">
                  {items.map((item) => (
                    <div id={item.value+"lvl"} >
                      {item.value}
                    </div>
                  ))}
                </div>
              )}
          </div>
          ////////////////////////////////////////////////////////////////////////</div>
    <div class="col">
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
    /></div>
  </div>
  </div>
</div>







    )

  }


}
