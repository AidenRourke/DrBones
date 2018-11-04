import React, {Component} from "react";
import styled from "styled-components";

import Modal from "react-modal";
import axios from "axios";
import Row from "./Row";
import {MedicalForm} from "../../components";

Modal.setAppElement('#root');

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayInfoForm: false,
            displayInfoPage: false,
            widgetRows: null
        };
        this.createRow = this.createRow.bind(this);
        this.apiCall = this.apiCall.bind(this);

    }

    componentDidMount() {
        this.apiCall((results) => {
            this.mapRows(results);
        });

    }

    async apiCall(callback) {
        let url;
        if (this.props.widgetType === 'medication') {
            url = 'http://localhost:4000/getAllMedications';
        } else if (this.props.widgetType === 'operations') {
            url = 'http://localhost:4000/getAllOperations';
        } else {
            url = 'http://localhost:4000/getAllMedicalConditions';
        }

        const response = await axios.post(url, {
            userId: document.cookie
        });

        if (!response.data.error) {
            callback(response.data);
        } else {
            this.setState({failed: true});
        }

    }

    createRow() {
        this.setState({
            displayInfoForm: true
        })
    }

    mapRows(list) {
        let key = 0;
        let listOfWidgets = [];
        let row;
        for (row in list.results) {
            listOfWidgets.push(
                <Row key={key++}>
                    <span className="left">{list.results[row].name}</span>
                    <span className="right">{list.results[row].date}</span>
                </Row>
            );
        }
        ;
        this.setState({widgetRows: listOfWidgets});
    }

    onClose(){
        this.setState({displayInfoForm: false});
        this.apiCall((results) => {
            this.mapRows(results);
        });
    }

    render() {
        return (
            <StyledWidget>
                <Modal isOpen={this.state.displayInfoForm}
                       onRequestClose={() => this.setState({displayInfoForm: false})}>
                    <MedicalForm data={this.props.widgetType} title={this.props.title}
                                 onClose={()=>this.onClose()}/>
                </Modal>
                <div className="title-container">
                    <span className="title">{this.props.title}</span>
                </div>
                {this.state.widgetRows}
                <div className="add-btn" onClick={() => this.createRow()}>+</div>
            </StyledWidget>
        )
    }
}

export default List;

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

    .left {
        display: block;
        float: left;
    }
    .right {
        display: block;
        float: right;
    }
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

`
