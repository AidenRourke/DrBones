import React, {Component} from "react";
import styled from "styled-components";

import Modal from "react-modal";
import Row from "./Row";
import {MedicalForm} from "../../components";

const StyledWidget = styled.div`
    display: flex;
    flex-direction: column;
    height: 97%;
    position: relative;
    width: 30%;
    background-color: white;
    margin: auto;
    align-text: center;
    border-radius: 20px;
    line-height: 40px;


    .title-container {
        width: 100%;
        height: 5%;
        border-radius: 20px 20px 0 0;
        background-color: lightGreen;
    }
    .add-btn {
        color: #000000;
        background-color: lightGreen;
        outline: none !important;
        border: none !important;
        font-size: 25px;
        align-text: center;
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        border-radius: 50%;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        user-select: none;
    }
    .add-btn:active {
        -webkit-transform: scale(0.9);
                transform: scale(0.9);
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
      }
      .add-btn:hover {
        cursor: pointer;
        background-color:rgba(0, 0, 0, 0.3);
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
      }

`;

Modal.setAppElement('#root');

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfoForm: false,
            displayInfoPage: false,
        };
        this.createRow = this.createRow.bind(this);
        // this.mapRows = this.mapRows.bind(this);
    }

    componentDidMount() {
    }

    createRow() {
        this.setState({
            displayInfoForm: true
        })
    }

    // mapRows(list) {
    //     let key = 0;
    //     list.conditions.map(listItem =>(
    //         <StyledRow key={key++}>
    //             <span>{listItem.title}</span>
    //             <span>{listItem.date}</span>
    //         </StyledRow>
    //     ))
    // }

    render() {
        const widgetRows = (
            <Row>Hello world</Row>
        );

        return <StyledWidget>
            <Modal isOpen={this.state.displayInfoForm} onRequestClose={() => this.setState({displayInfoForm: false})}>
                <MedicalForm data={this.props.widgetType}/>
            </Modal>
            <div className="title-container">
                <span className="title">{this.props.title}</span>
            </div>
            {widgetRows}
            <div className="add-btn" onClick={() => this.createRow()}>+</div>
        </StyledWidget>
    }
}



