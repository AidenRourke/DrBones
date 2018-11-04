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
    padding-left: 4%;
    height: 40px;
    background-color: white;
    border-bottom: 1px solid lightgray;
    color: #000000;
`