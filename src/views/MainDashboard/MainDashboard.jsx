import React, { Component } from "react";
import styled from "styled-components";
import List from "./List"

const StyledDashboard = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 80vh;
    margin: 75px auto 0;
    border: solid 2px #000000;
    border-radius: 6px;
    background-color: #e34a23;
    justify-content: space-evenly;
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
                    widgetType="surgeries"
                />
                <List 
                    title="Medical Conditions"
                    widgetType="conditions"
                />
            </StyledDashboard>
        )
    }
}

