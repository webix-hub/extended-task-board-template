import {dataRecentActivities} from "../data/dataRecentActivities";

export const recentActivities = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Recent Activities"
				},
				{}
			]
		},
		{
			view: "datatable",
			columns: [
				{id: "date", header: "Release Date", width: 110},
				{id: "task", header: "Task", minWidth: 420, fillspace: true},
				{id: "status", header: "Status", minWidth: 120, fillspace: true, template: '<span class="status #statusClass#">#status#</span>'},
				{id: "button", header: "", width: 80, template: '<span class="playBtn"></span>', css: "flexCol"}
			],
			data: dataRecentActivities
		}
	]
};
