export const dataModels = {
    medicalCondition: [
        {name: "name", type: "string", display: "Title", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "notes", type: "array", display: "Notes"}
    ],
    operations: [
        {name: "medicalConditionId", type: "string", display: "Medical Condition", required: true},
        {name: "name", type: "string", display: "Title", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "notes", type: "array", display: "Notes"}
    ],
    medication: [
        {name: "medicalConditionId", type: "string", display: "Medical Condition",Description:"Enter the name of the medical condition", required: true},
        {name: "name", type: "string", display: "Title",Description:"Enter the name of the operation", required: true},
        {name: "date", type: "date", display: "Date", required: true},
        {name: "dose", type: "string", display: "Dose", required: true},
        {name: "frequency", type: "string", display: "Frequency", required: true},
        {name: "timePeriod", type: "string", display: "Time Period", required: true},
        {name: "notes", type: "array", display: "Notes"},
    ]

};
