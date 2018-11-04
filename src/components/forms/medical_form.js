import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input';
import Calendar from 'react-calendar';
import { dataModels } from './data_models';

export default class MedicalForm extends Component {
	state = {
		date: new Date(),
	};

	handleSubmit = async ( event ) => {
		const {} = this.state;
		await axios.post( "https://drbones.herokuapp.com/", {} )
	};

	onChange = date => this.setState( { date } );


	render(){
		return (
			Object.keys( this.props.dataModels ).map( field => {
				if( field.type === "string" ){
					return <label>
						{field.display}
						<Input type="text" value={field.name} onChange={e => this.setState({[field.name]: e.target.value})}  />
					</label>
				}
				else if( field.type === "array" ){
					return <textarea value={field.name} onChange={e => this.setState({[field.name]: e.target.value})}/>
				} else if(field.type === "date") {
					return <Calendar onChange={this.onChange} value={this.state.date}/>
				}
			} )
		);
	}
}

