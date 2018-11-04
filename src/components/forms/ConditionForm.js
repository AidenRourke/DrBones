import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

import {dataModels} from './data_models';

const Form = styled.div`
  background-color: white;
  width: 400px;
  border: 1px solid #B8C0CC;
  border-radius: 3px;
`;

const Item = styled.div`
    line-height: 30px;
    padding: 5px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #84CF96;
    }
`;

export default class ConditionForm extends Component {
    state = {
        newCondition: false,
        conditions: []
    };

    async componentWillMount() {
        const response = await axios.post('http://localhost:4000/getAllMedicalConditions', {
            userId: document.cookie
        });
        this.setState({conditions: response.data.results});
    }

    toggleForm = e => {
        e.stopPropagation()
        this.setState({newCondition: true})
    };

    render() {
        const {onSubmit} = this.props;

        return <Form>
            {!this.state.newCondition ?
                <div>
                    <Item onClick={this.toggleForm}>New Condition</Item>
                    {this.state.conditions.map(condition => <Item onClick={() => onSubmit(condition)}>{`${condition.name} ${condition.date}`}</Item>)}
                </div>
                :
                <div>
                    NEW FORM
                </div>
            }
        </Form>
    }
}

