import React, { Component } from "react";
import styled from "styled-components";

import Row from "./Row";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayNewConditionPage: false,
            displayInfoForm: false,
            displayInfoPage: false,
            displayCreateRow: false,
            widgetType: ""
        }
        this.createRow = this.createRow.bind(this);
        // this.mapRows = this.mapRows.bind(this);
    }

    componentDidMount() {
        this.setState({
            widgetType: this.props.widgetType
        })
    }

    createRow() {
        this.setState({
            displayCreateRow: true
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
        )
        return (
            <StyledWidget>
                <div className="title-container">
                    <span className="title">{this.props.title}</span>
                    <div className="add-btn" onClick={() => this.createRow()}>+</div>
                </div>
                {widgetRows}
            </StyledWidget>
        )
    }
}

export default List;

const StyledWidget = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 30%;
    background-color: blue;
    margin: 15px 0;

    .title-container {
        width: 100%;
        background-color: lightGreen;
        
        .title {
            float: left;
        }
    
        .add-btn {
            color: #000000;
            background-color: lightGreen;
            outline: none !important;
            border: none !important;
            float: right;
            width: 60px;
        }
    }

`
