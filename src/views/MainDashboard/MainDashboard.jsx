import React, { Component } from "react";
import styled from "styled-components";
import List from "./List"

const StyledDashboard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 10px;
    justify-content: space-around;
    -webkit-text-fill-color: #008000;
`;

export default class MainDashboard extends Component {

    render() {
        return (
            <StyledDashboard>
                <List
                    title="Medication"
                    widgetType="medication"
                />
                <List 
                    title="Surgeries and Operations"
                    widgetType="operation"
                />
                <List 
                    title="Medical Conditions"
                    widgetType="medicalCondition"
                />
            </StyledDashboard>
        )
    }
}

