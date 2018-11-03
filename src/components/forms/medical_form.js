import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class MedicalForm extends Component{
  constructor(props){
    super(props);
    this.state={
      medicalCondition: "",
      date: "",

      optionalNotes: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = async event =>{

  }
  render(){
    return(
      <form onSubmit={this.handleChange}>
        <label>
          Medical Condition:
          <input type="text" name="medicalCond" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Note(Optional):
          <textarea value={this.state.value} onChange={this.handleChange} placeHolder="Optional"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default MedicalForm;
