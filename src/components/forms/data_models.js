export const dataModels = {
    medicalCondition: [
        {name: "name", type: "string", display: "Title",description:"Enter the name of the medical condition", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "notes", type: "array", display: "Notes",description:"Optional"}
    ],
    operation: [
        {name: "medicalConditionId", type: "condition", display: "Medical Condition",description:"Choose a medical condition", required: true},
        {name: "name", type: "string", display: "Title",description:"Enter the name of the operation", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "notes", type: "array", display: "Notes",description:"Optional"}
    ],
    medication: [
        {name: "medicalConditionId", type: "condition", display: "Medical Condition",description:"Choose a medical condition", required: true},
        {name: "name", type: "string", display: "Title",description:"Enter the name of the medication", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "dose", type: "string", display: "Dose",description:"Enter the dosage given", required: true},
        {name: "frequency", type: "string", display: "Frequency",description:"Enter how often the medication was taken (ex. once a day)", required: true},
        {name: "timePeriod", type: "string", display: "Time Period",description:"Enter the time period the medication was taken (ex. 2 weeks)", required: true},
        {name: "notes", type: "array", display: "Notes",description:"Optional"},
    ]

};
