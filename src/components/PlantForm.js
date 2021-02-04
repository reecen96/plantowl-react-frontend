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
    //prevent the form from reloading the page when submitting
    ev.preventDefault();
    //submit form
    this.props.onPlantSubmit( this.state.plantContent )
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}/>
        <br/>
        <button> Add Data </button>
      </form>
    )


  } // render

} //User form


export default PlantForm
