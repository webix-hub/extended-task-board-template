import {dataKanbanTable, usersSet} from "../data/dataTable";

webix.type(webix.ui.kanbanlist, {
	name: "cards",
	icons: [
		{
			id: "comments",
			icon: "mdi mdi-comment-outline",
			template(obj) {
				return obj.comments ? obj.comments.length : "";
			}
		}
	],
	template(obj, common) {
		let kanban = webix.$$(common.master);
		let body = `
			<div class='webix_kanban_body'> 
				<p class='cardTitle'>${obj.title ? obj.title : "New Card"}</p>
				<span class='cardText'>${obj.text}</span>
			</div>`;
		let footer = `
			<div class='webix_kanban_footer'>
				${common.templateFooter(obj, common, kanban)}
			</div>`;
		return `
			<div class='webix_kanban_list_content'>
				${body}
				${footer}
			</div>`;
	},
	templateFooter(obj, common) {
		let kanban = webix.$$(common.master);
		let defaultDate = new Date();
		let formatDate = webix.Date.dateToStr("%d/%m/%Y");
		let footerRow = `
			<div class="cardFooter">
				<span class="flex alignCenter">
					<span class="cardPriority ${obj.priority ? obj.priority : "low"}">${obj.priority ? obj.priority : "low"}</span>
					<span>${common.templateIcons(obj, common, kanban)}</span>
				</span>
				<span class="flex alignCenter">
					<span class="webix_icon wxi-calendar"></span>
					<span class="cardDate">${formatDate(obj.date ? obj.date : defaultDate)}</span>
				</span>
			</div>`;
		return footerRow;
	}
});

function tpl() {
	const icon = "<span class='webix_icon webix_kanban_add_icon mdi mdi-plus-circle'></span>";
	const label = `${this.label} ${webix.$$(this.link).count()}`;
	return `<span class="webix_strong" style="line-height:${this.height}px">${label}</span>${icon}`;
}

export const kanbanTable = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Board"
				},
				{}
			]
		},
		{
			id: "kanban",
			view: "kanban",
			css: "tableKanban",
			borderless: true,
			padding: {top: 10, left: 0, right: 0, bottom: 0},
			cols: [
				{
					rows: [
						{
							view: "kanbanheader",
							label: "Open",
							link: "open",
							template: tpl
						},
						{
							id: "open",
							view: "kanbanlist",
							status: "open",
							type: "cards"
						}
					]
				},
				{
					rows: [
						{
							view: "kanbanheader",
							label: "In Progress",
							link: "in_progress",
							template: tpl
						},
						{
							id: "in_progress",
							view: "kanbanlist",
							status: "in_progress",
							type: "cards"
						}
					]
				},
				{
					rows: [
						{
							view: "kanbanheader",
							label: "On Review",
							link: "on_review",
							template: tpl
						},
						{
							id: "on_review",
							view: "kanbanlist",
							status: "on_review",
							type: "cards"
						}
					]
				},
				{
					rows: [
						{
							view: "kanbanheader",
							label: "Done",
							link: "done",
							template: tpl
						},
						{
							id: "done",
							view: "kanbanlist",
							status: "done",
							type: "cards"
						}
					]
				}
			],
			comments: {currentUser: 2},
			data: dataKanbanTable,
			users: usersSet,
			editor: {
				elements: [
					{view: "text", name: "title", label: "Title"},
					{view: "text", name: "text", label: "Task"},
					{
						view: "richselect",
						name: "priority",
						label: "Priority",
						options: [
							{id: "low"},
							{id: "middle"},
							{id: "high"}
						]
					},
					{
						cols: [
							{
								view: "datepicker",
								name: "date",
								label: "Date",
								format: webix.Date.dateToStr("%d/%m/%y")
							}
						]
					}
				]
			},
			attachments: "/attachments",
			on: {
				"data->onStoreUpdated": (id, obj, op) => {
					if (op) {
						const search = op === "update" ? "kanbanheader" : {link: obj.status};
						const headers = webix.$$("kanban").queryView(search, "all");
						webix.delay(() => {
							headers.forEach(header => header.refresh());
						});
					}
				}
			}
		}
	]
};
