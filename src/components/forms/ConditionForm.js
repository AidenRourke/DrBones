import React, {Component} from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../Input";
import Calendar from "react-calendar";
import TextArea from "../TextArea";
import Button from "../Button";
import moment from "moment";

const Form = styled.div`
  background-color: white;
  width: 400px;
  border: 1px solid #B8C0CC;
  border-radius: 3px;
  max-height: 500px;
  overflow-y: scroll;
  text-align: center;
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

const InputField = styled.div`
  text-align: left;
  color: #008000;
`;

const Buttons = styled.div`
  button {
    padding: 0 20px;
    margin: 10px;
    display: inline-block;
    width: auto;
    border-radius: 20px;
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
    };

    handleSubmit = async () => {
        const {notes, date, name} = this.state;
        const {onSubmit} = this.props;

        const requestBody = {
            date: this.formatDate(date),
            userId: document.cookie,
            notes,
            name
        };

        const response = await axios.post(`http://localhost:4000/addMedicalCondition`, {
            ...requestBody
        });

        onSubmit({
            uniqueId: response.uniqueId,
            name
        })
    };

    formatDate(dateString) {
        let m = moment(dateString, `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`);
        dateString = m.format('l');
        return dateString;
    }

    toggleForm = e => {
        e.stopPropagation()
        this.setState({newCondition: !this.state.newCondition})
    };

    render() {
        const {onSubmit} = this.props;

        return <Form>
            {!this.state.newCondition ?
                <div>
                    <Item onClick={this.toggleForm}>New Condition</Item>
                    {this.state.conditions.map(condition => <Item
                        onClick={() => onSubmit(condition)}>{`${condition.name} ${condition.date}`}</Item>)}
                </div>
                :
                <div style={{margin: 20}}>
                    <InputField>
                        <label>Title:</label>
                        <Input type="text" value={this.state.name || ""}
                               placeholder="Enter the name of the medical condition"
                               style={{border: "1px solid #008000", borderRadius: "3px"}}
                               onChange={e => this.setState({name: e.target.value})}/>
                    </InputField>
                    <InputField style={{textAlign: "left", color: "#008000"}}>
                        <label>Date:</label>
                        <Calendar onChange={(date) => this.setState({date})}
                                  value={this.state.date}/>
                    </InputField>
                    <InputField>
                        <label>Notes:</label>
                        <TextArea value={this.state.notes}
                                  placeholder="optional"
                                  style={{border: "1px solid #B8C0CC", borderRadius: "3px"}}
                                  onChange={e => this.setState({notes: e.target.value})}/>
                    </InputField>
                    <Buttons>
                        <Button disabled={!this.state.name || !this.state.date} onClick={this.handleSubmit}>Submit</Button>
                        <Button muted onClick={this.toggleForm}>Cancel</Button>
                    </Buttons>
                </div>
            }
        </Form>
    }
}

