import React, {Component} from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  height: 50px;
  border: 1px solid ${props => props.disabled ? "#008000" : "none"};
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  background-color: ${props => props.disabled ? "white" : "#009A31"};
  background-color: ${props => props.muted && "#B8C0CC"};
  color: ${props => props.disabled ? "#B8C0CC" : "white"};
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