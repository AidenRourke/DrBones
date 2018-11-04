import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Calendar from 'react-calendar';

import Input from '../Input';
import {dataModels} from './data_models';

const FormContainer = styled.div`
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
                    if (field.type === "string") {
                        return <label>
                            {field.display}
                            <Input type="text" value={this.state[field.name]}
                                   onChange={e => this.setState({[field.name]: e.target.value})}/>
                        </label>
                    }
                    // else if (field.type === "array") {
                    //     return <textarea value={field.name} onChange={e => this.setState({[field.name]: e.target.value})}/>
                    // } else if (field.type === "date") {
                    //     return <Calendar onChange={this.onChange} value={this.state.date}/>
                    // }
                })
            }
        </FormContainer>;
    }
}

