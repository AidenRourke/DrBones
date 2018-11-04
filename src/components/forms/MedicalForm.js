import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Calendar from 'react-calendar';

import Input from '../Input';
import {dataModels} from './data_models';

const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
`;

export default class MedicalForm extends Component {
    state = {};

    handleSubmit = async (event) => {
        console.log("submitted")
        // await axios.post("https://drbones.herokuapp.com/", {})
    };

    onChange = date => this.setState({date});

    render() {
        const {data} = this.props;
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
                                <Calendar onChange={this.onChange} value={this.state.date}/>
                            </div>
                    }
                })
            }
        </FormContainer>;
    }
}

