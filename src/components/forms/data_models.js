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
			date:{},
			notes: { name: "notes", type: "array", display: "Notes" },
		}
	],
	medication: [
		{
			medicalCondition: { name: "medicalCondition", type: "string", display: "Medical Condition" },
			title: { name: "title", type: "string", display: "Title" },
			date: "",
			dose: "",
			frequency:{name:"frequency",type:"string",display:""},
			timePeriod: "",
			notes: { name: "notes", type: "array", display: "Notes" },
		}
	]
};
