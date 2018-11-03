import React, {Component} from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  height: 50px;
  border: ${props => props.disabled ? "black" : "none"};
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  background-color: ${props => props.disabled ? "#B8C0CC" : "#009A31"};
  color: white;
  cursor: pointer; 
  box-sizing: border-box;
`;

export default class Button extends Component {
    render() {
        const {children, ...props} = this.props;

        return <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    }
}