import React, { Component } from 'react';
import axios from 'axios';
import {dataModels} from './data_models';

class MedicalForm extends Component{
  constructor(props){
    super(props);
    this.state={
      medicalCondition: "",
      date: "",


      optionalNotes: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
     axios.post()
  }
  render(){
    return(
      <form onSubmit={this.handleChange}>
        <label>
          Medical Condition:
          <input type="text" name="medicalCondition" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Note(Optional):
          <textarea name="optionalNotes" value={this.state.value} onChange={this.handleChange} placeholder="Optional"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default MedicalForm;
