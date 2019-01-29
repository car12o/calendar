const initialState: IEvent[] = [];

const events = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET-EVENTS':
			if (action.status !== 200) {
				return [];
			}
			return [];
		default:
			return state;
	}
};

export default events;
