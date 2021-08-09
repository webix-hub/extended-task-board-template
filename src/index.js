import {header} from "./js/header";
import {userMenu} from "./js/userMenu";
import {taskProgress} from "./js/taskProgress";
import {recentActivities} from "./js/recentActivities";
import {kanbanTable} from "./js/kanbanTable";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "space",
				rows: [
					kanbanTable,
					{
						gravity: 0.7,
						margin: 10,
						cols: [
							recentActivities,
							taskProgress
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);
});
