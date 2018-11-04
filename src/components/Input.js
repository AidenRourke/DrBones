import React, {Component} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  text-align: inherit;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1px;
  line-height: 30px;
  border: 2px solid #fff;
  padding: 5px;
`;

export default class Input extends Component {
    render() {
        const {...props} = this.props;
        return <StyledInput {...props}/>;
    }
}