export const dataModels = {
    medicalCondition: [
        {name: "name", type: "string", display: "Title"},
        {name: "date", type: "date", display: "Date"},
        {name: "notes", type: "array", display: "Notes"}
    ],
    operations: [
        {name: "medicalConditionId", type: "string", display: "Medical Condition"},
        {name: "name", type: "string", display: "Title"},
        {name: "date", type: "date", display: "Date"},
        {name: "notes", type: "array", display: "Notes"}
    ],
    medication: [
        {name: "medicalConditionId", type: "string", display: "Medical Condition"},
        {name: "name", type: "string", display: "Title"},
        {name: "date", type: "date", display: "Date"},
        {name: "dose", type: "string", display: "Dose"},
        {name: "frequency", type: "string", display: "Frequency"},
        {name: "timePeriod", type: "string", display: "Time Period"},
        {name: "notes", type: "array", display: "Notes"},
    ]

};
