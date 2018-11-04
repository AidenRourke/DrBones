import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';

const ViewContainer = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
  text-overline-color: #008000;
  color:green

  .line {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
  }
`;

export default class ComprehensiveView extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: null,
            uniqueId: this.props.uniqueId,
            date: null
        }
    }

    componentWillMount(){
        this.apiCall((data) => {
            if (this.props.context.widgetType === 'medication') {
                this.setState({
                    medicalConditionId: data.medicalConditionId,
                    name: data.name,
                    date: data.date,
                    dose: data.dose,
                    frequency: data.frequency,
                    timePeriod: data.timePeriod,
                    notes: data.notes
                });
                this.getAllMedicalConditions();
            }
            if (this.props.context.widgetType === 'operation') {
                
                this.setState({
                    medicalConditionId: data.medicalConditionId,
                    name: data.name,
                    date: data.date,
                    notes: data.notes
                });
                this.getAllMedicalConditions();
            }
            if (this.props.context.widgetType === 'medicalCondition') {
                this.setState({
                    name: data.name,
                    date: data.date,
                    notes: data.notes
                });
                this.getPrescriptions();
            }
        });

    }

    async getPrescriptions() {
        let url = 'http://localhost:4000/getAllMedications';

        const response = await axios.post(url, {
            userId: document.cookie,
            uniqueId: this.props.context.uniqueId
        });

        let index;
        let arr;
        let arrOfPrescriptions = [];

        if (!response.data.error) {
            arr = response.data.results;
            for (index in arr) {
                console.log(arr);
                if(arr[index].medicalConditionId === this.props.context.uniqueId){
                    arrOfPrescriptions.push(arr[index].name);
                }
            };
            console.log(arrOfPrescriptions);
            this.setState({prescriptions: arrOfPrescriptions});
        } else {
            this.setState({failed: true});
        }
    
    }

    async apiCall(callback) {
        let url;
        if (this.props.context.widgetType === 'medication') {
            url = 'http://localhost:4000/getMedicationInfo';
        }
        if (this.props.context.widgetType === 'operation') {
            url = 'http://localhost:4000/getOperationInfo';
        }
        if (this.props.context.widgetType === 'medicalCondition') {
            url = 'http://localhost:4000/getMedicalConditionInfo';
        }

        const response = await axios.post(url, {
            userId: document.cookie,
            uniqueId: this.props.context.uniqueId
        });

        if (!response.data.error) {
            callback(response.data.results[0]);
        } else {
            this.setState({failed: true});
        }
    }

    async getAllMedicalConditions(){
        const response = await axios.post('http://localhost:4000/getAllMedicalConditions', {
            userId: document.cookie
        });
        let arr = response.data.results;
        let condition;
        let medicalConditionString;
        for (condition in arr) {
            if(arr[condition].uniqueId === this.state.medicalConditionId){
                medicalConditionString = arr[condition].name;
            }
        };
        this.setState({condition: response.data.results, medicalConditionString: medicalConditionString});
    }

    render() {
        let jsx;
        if (this.props.context.widgetType === 'medication') {
            jsx = (
                <ViewContainer>
                    <h1>{`${this.state.name}`}</h1>
                    <div className={'line'}>
                        <h1>{`To Treat: `}</h1>
                        <h1>{`${this.state.medicalConditionString}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Date:`}</h1>
                        <h1>{`${this.state.date}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Dose:`}</h1>
                        <h1>{`${this.state.dose}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Frequency:`}</h1>
                        <h1>{`${this.state.frequency}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Duration:`}</h1>
                        <h1>{`${this.state.timePeriod}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Notes:`}</h1>
                        <h1>{`${this.state.notes}`}</h1>
                    </div>
                </ViewContainer>
            );
        } else if (this.props.context.widgetType === 'operation') {
            jsx = (
                <ViewContainer>
                    <h1>{`${this.state.name}`}</h1>
                    <div className={'line'}>
                        <h1>{`To Treat: `}</h1>
                        <h1>{`${this.state.medicalConditionString}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Date:`}</h1>
                        <h1>{`${this.state.date}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Notes:`}</h1>
                        <h1>{`${this.state.notes ? this.state.notes : 'No notes recorded!'} `}</h1>
                    </div>
                </ViewContainer>
            );
        } else if (this.props.context.widgetType === 'medicalCondition') {
            jsx = (
                <ViewContainer>
                    <h1>{`${this.state.name}`}</h1>
                    <div className={'line'}>
                        <h1>{`Date:`}</h1>
                        <h1>{`${this.state.date}`}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Notes:`}</h1>
                        <h1>{`${this.state.notes ? this.state.notes : 'No notes recorded!'} `}</h1>
                    </div>
                    <div className={'line'}>
                        <h1>{`Prescribed Medications:`}</h1>
                        <h1>{`${this.state.prescriptions ? this.state.prescriptions : 'No prescribed medications!'} `}</h1>
                    </div>
                </ViewContainer>
            );
        } else {
            jsx = '';
        }
        return jsx;
    }
}

