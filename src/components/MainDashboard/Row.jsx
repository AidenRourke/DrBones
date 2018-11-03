import React, { Component } from "react";
import styled from "styled-components";

class Row extends Component {

    render() {
        return (
            <StyledRow>
                {this.props.children}
            </StyledRow>
        )
    }
}

export default Row;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: lightBlue;
    margin: 10px;
    color: #000000;
`