import TableActions from '../actions/actionTypes/tableActions';

const defaultState = {
    text: ''
};

export const tableReducer = (state = defaultState, action) => {
    switch (action.type) {
    case TableActions.FIELD_CHANGED:
        return { ...state, text: action.payload };
    default:
        return state;
    }
};
