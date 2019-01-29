const initialState: IEvent[] = [];

const events = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET-EVENTS':
			if (action.status !== 200) {
				return [];
			}
			return action.body;
		default:
			return state;
	}
};

export default events;
