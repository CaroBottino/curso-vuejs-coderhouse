const store = {
    state: {
        user: {
            fullname: "",
            pass: "",
            role: "",
            email: "",
            id: "",
            cart: [],
        },
        logged: false,
    },
    loggingUser(form) {
        console.log("store - loggingUser: ", form);
        this.state.user = form;
        this.state.logged = true;
    },
    logoutUser() {
        this.state.user = {
            fullname: "",
            pass: "",
            role: "",
            email: "",
            id: "",
            cart: [],
        };
        this.state.logged = false;
    },
    editUserInfo(userUpdated) {
        console.log("store - editUserInfo...");
        this.state.user = userUpdated;
    },
}

export default store;