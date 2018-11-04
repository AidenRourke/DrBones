import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Calendar from 'react-calendar';
import moment from 'moment';
import TextArea from '../TextArea';
import Input from '../Input';
import Button from '../Button';
import {dataModels} from './data_models';

const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
  text-overline-color: #008000;
`;

const Buttons = styled.div`
  button {
    padding: 0 20px;
    margin: 10px;
    display: inline-block;
    width: auto;
    border-radius: 20px;
  }
`

export default class MedicalForm extends Component {
    state = {};
    constructor(props){
        super(props);
        this.handleSubmit.bind(this);
    }
    

    handleSubmit = async () => {
        const {onClose} = this.props;
        const endpoint = this.props.data.charAt(0).toUpperCase() + this.props.data.slice(1);
        const newDate = this.formatDate(this.state.date);
        await this.setState({date: newDate}, ()=>{
            axios.post(`http://localhost:4000/add${endpoint}`, {
                ...this.state,
                userId: document.cookie
            });
            onClose();
        });
       
    };

    checkCompletion = () => {
        let completed = true;
        dataModels[this.props.data].map(field => {
            if (field.required && !this.state[field.name]) {
                completed = false;
            }
        });
        return completed;
    };

    formatDate(dateString){
        let m = moment(dateString, `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`);
        dateString = m.format('l');
        return dateString;
    }

    onChange(date, field){
        
        this.setState({[field.name]: date});
    }

    render() {
        const {data, onClose} = this.props;
        return <FormContainer>
            <h1 style={{color:"green"}}>{`${this.props.title} input form`}</h1>
            {
                dataModels[data].map(field => {
                    // eslint-disable-next-line default-case
                    switch (field.type) {
                        case "string":
                            return <div style={{textAlign: "left", color: "#008000"}}>
                                <label>{field.display}:</label>
                                <Input type="text" value={this.state[field.name] || ""}
									   placeholder={field.description}
                                       style={{border: "1px solid #008000", borderRadius: "3px"}}
                                       onChange={e => this.setState({[field.name]: e.target.value})}/>
                            </div>;
                        case "date":
                            return <div style={{textAlign: "left", color: "#008000"}}>
                                <label>{field.display}:</label>
                                <Calendar onChange={(date) => this.onChange(date, field)}
                                value={this.state.date}/>
                            </div>
						case "array":
							return <div style={{textAlign: "left", color: "#008000"}}>
								<label>{field.display}:</label>
								<TextArea value={this.state[field.name]}
                                       placeholder={field.description}
									   style={{border: "1px solid #008000", borderRadius: "3px"}}
									   onChange={e => this.setState({[field.name]: e.target.value})}/>
							</div>;

                    }
                })
            }
            <Buttons>
                <Button disabled={!this.checkCompletion()} onClick={this.handleSubmit}>Submit</Button>
                <Button muted onClick={onClose}>Cancel</Button>
            </Buttons>
        </FormContainer>;
    }
}

