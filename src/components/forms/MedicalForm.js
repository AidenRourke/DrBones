import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Calendar from 'react-calendar';

import Input from '../Input';
import Button from '../Button';
import {dataModels} from './data_models';

const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
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

    handleSubmit = async () => {
        const { onClose } = this.props;
        const endpoint = this.props.data.charAt(0).toUpperCase() + this.props.data.slice(1);
        await axios.post(`https://drbones.herokuapp.com/add${endpoint}`, {
            ...this.state,
            userId: document.cookie
        });
        onClose();
    };

    render() {
        const {data, onClose} = this.props;
        return <FormContainer>
            <h1>{`${this.props.title} input form`}</h1>
            {
                dataModels[data].map(field => {
                    switch (field.type) {
                        case "string":
                            return <div style={{textAlign: "left"}}>
                                <label>{field.display}:</label>
                                <Input type="text" value={this.state[field.name]}
                                       style={{border: "1px solid #B8C0CC", borderRadius: "3px"}}
                                       onChange={e => this.setState({[field.name]: e.target.value})}/>
                            </div>;
                        case "date":
                            return <div style={{textAlign: "left"}}>
                                <label>{field.display}:</label>
                                <Calendar onChange={date => this.setState({[field.name]: date})}
                                          value={this.state.date}/>
                            </div>
                    }
                })
            }
            <Buttons>
                <Button onClick={this.handleSubmit}>Submit</Button>
                <Button muted onClick={onClose}>Cancel</Button>
            </Buttons>
        </FormContainer>;
    }
}

