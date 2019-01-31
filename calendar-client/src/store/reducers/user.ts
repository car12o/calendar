const initialState: IUser = {
	logged: false,
	_id: "",
	username: "",
	password: "",
};

const user = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET-USERNAME':
			return Object.assign({}, state, { username: action.username });
		case 'SET-PASSWORD':
			return Object.assign({}, state, { password: action.password });
		case 'SUBMIT-LOGIN':
		case 'SUBMIT-REGISTER':
		case "INITIAL-STATE":
			if (action.status !== 200) {
				alert(action.body.err);
				return state;
			}

			return Object.assign({}, state, {
				logged: action.body.logged,
				username: action.body.user.username || "",
				password: action.body.user.password || "",
				_id: action.body.user._id || "",
			});
		default:
			return state;
	}
};

export default user;

