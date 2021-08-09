export const userTemplate = {
	borderless: true,
	css: "user",
	width: 64,
	padding: {left: 50},
	height: 44,
	popup: "user_menu",
	template() {
		return `
        <div class="userInner">
            <span class="userAvatar">
                <img class="userImage" src="./photos/avatar.png">
				<span class="userStatus"></span>
            </span>
        </div>`;
	},
	onClick: {
		user() {
			const node = this.$view;
			const menu = webix.$$("user_menu");
			if (!menu.isVisible()) {
				menu.show(node);
			}
			else menu.hide();
		}
	}
};
