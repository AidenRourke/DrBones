export const dataModels = {
	medicalCondition: [
		{
			title: { name: "title", type: "string", display: "Title" },
			date: {name:"date",display:"Date"},
			notes: { name: "notes", type: "array", display: "Notes" },
		}
	],
	operations: [
		{
			medicalCondition: { name: "medicalCondition", type: "string", display: "Medical Condition" },
			title: { name: "title", type: "string", display: "Title" },
			date:{name:"date",display:"Date"},
			notes: { name: "notes", type: "array", display: "Notes" },
		}
	],
	medication: [
		{
			medicalCondition: { name: "medicalCondition", type: "string", display: "Medical Condition" },
			title: { name: "title", type: "string", display: "Title" },
			date:{name:"date",type:"date", display:"Date"},
			dose:{name:"dose", type:"string",display:"Dose"},
			frequency:{name:"frequency",type:"string",display:"Frequency"},
			timePeriod:{name:"timePeriod",type:"string",display:"Time Period"},
			notes: { name: "notes", type: "array", display: "Notes" },
		}
	]
};
