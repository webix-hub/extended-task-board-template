const dataKanbanTable = [
	{id: 1, date: new Date(2021, 7, 8), priority: "low", status: "open", title: "Task-20", text: "Company overview materials for media", attachments: [{id: 1, link: "/attachments/attach1.png", size: 16985}, {id: 2, link: "/attachments/attach2.png", size: 17829}, {id: 3, link: "/attachments/attach3.png", size: 18601}]},
	{id: 2, date: new Date(2021, 7, 8), priority: "low", status: "open", title: "Task-21", text: "Prepare new posts for our Blog"},
	{id: 3, date: new Date(2021, 7, 8), priority: "middle", status: "open", title: "Task-22", text: "Update promo banners on Facebook", comments: [{id: 1, user_id: 1, date: new Date(), text: "I'm on it, just need more info on the getParent() method"}, {id: 2, user_id: 2, date: new Date(), text: "Good job, you can move this to verified"}], attachments: [{id: 1, link: "/attachments/attach1.png", size: 16985}, {id: 2, link: "/attachments/attach2.png", size: 17829}, {id: 3, link: "/attachments/attach3.png", size: 18601}]},
	{id: 4, date: new Date(2021, 7, 7), priority: "high", status: "open", title: "Task-20", text: "Create email templates for Sale Day"},
	{id: 5, date: new Date(2021, 7, 7), priority: "middle", status: "in_progress", title: "Task-13", text: "Create new post for Instagram and Facebook"},
	{id: 6, date: new Date(2021, 7, 5), priority: "high", status: "in_progress", title: "Task-12", text: "Create email templates for Black Friday"},
	{id: 7, date: new Date(2021, 7, 5), priority: "low", status: "in_progress", title: "Task-11", text: "Post promotion article on Facebook, Twitter"},
	{id: 8, date: new Date(2021, 7, 3), priority: "high", status: "on_review", title: "Task-10", text: "Training materials in PDF"},
	{id: 9, date: new Date(2021, 7, 2), priority: "low", status: "on_review", title: "Task-09", text: "Create 30 day plans for all departmants"},
	{id: 10, date: new Date(2021, 7, 2), priority: "middle", status: "on_review", title: "Task-08", text: "Create email templates for Sale Day"},
	{id: 11, date: new Date(2021, 7, 1), priority: "high", status: "done", title: "Task-10", text: "Prepare new posts for Facebook", comments: [{id: 1, user_id: 2, date: new Date(), text: "Done!"}], attachments: [{id: 1, link: "/attachments/attach1.png", size: 16985}, {id: 2, link: "/attachments/attach2.png", size: 17829}, {id: 3, link: "/attachments/attach3.png", size: 18601}]}
];

const usersSet = [
	{id: 1, value: "Rick Lopes", image: "/photos/avatar.png"},
	{id: 2, value: "Martin Farrell", image: "/photos/avatar2.png"}
];

export {dataKanbanTable, usersSet};
