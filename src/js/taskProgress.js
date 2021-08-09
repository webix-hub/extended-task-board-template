import {dataTaskProgress} from "../data/dataTaskProgress";

export const taskProgress = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Task Progress"
				},
				{}
			]
		},
		{
			view: "chart",
			type: "barH",
			padding: {left: 100, right: 30, top: 10, bottom: 30},
			color: "#color#",
			xAxis: {
				start: 0,
				step: 10,
				end: 90,
				property: "#value#"
			},
			yAxis: {
				template: "#title#",
				lines: false
			},
			barWidth: 30,
			data: dataTaskProgress
		}
	]
};
