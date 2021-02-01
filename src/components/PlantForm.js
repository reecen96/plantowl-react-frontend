import React from 'react';

class PlantForm extends React.Component{


  state = {
    plantContent: ''
  };

  handleChange = (ev) => {
    console.log('handleChange():', ev.target.value)
    this.setState({ plantContent: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault(); //stop the form submit from reloading the page
    //send the secret content to the parent component so it can submit it
    //to the parent backend
    this.props.onPlantSubmit( this.state.plantContent )
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}/>
        <br />
        <button> Add Data </button>
      </form>
    )


  } // render



} //User form


export default PlantForm
