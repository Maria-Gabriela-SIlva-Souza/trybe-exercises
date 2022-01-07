const INITIAL_STATE = []

export const ADD_ELEMENT = 'ADD_ELEMENT';

function listReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_ELEMENT:
			return [...state, action.value];
		default:
			return state;
	}
}

export default listReducer;