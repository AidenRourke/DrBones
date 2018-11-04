import React, { Component } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  text-align: inherit;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 0;
  height: 100px;
  line-height: 30px;
  border: 2px solid #fff;
  padding: 5px;
`;

export default class TextArea extends Component {
	render(){
		const {...props} = this.props;
		return <StyledTextArea {...props}/>
	}
}
