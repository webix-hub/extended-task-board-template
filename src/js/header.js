import {userTemplate} from "./userTemplate";

export const header = {
	view: "toolbar",
	css: "webix_dark",
	padding: {left: 10, right: 15, top: 4, bottom: 4},
	margin: 10,
	cols: [
		{
			view: "icon",
			icon: "mdi mdi-menu"
		},
		{
			view: "label",
			label: "EXTENDED TASK BOARD",
			width: 212
		},
		{
			rows: [
				{},
				{
					view: "search",
					css: "headerSearch",
					placeholder: "Search",
					width: 182
				},
				{}
			]
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-bell",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		},
		userTemplate
	]
};
