import TableActions from '../Actions/ActionTypes/TableActions';

const defaultState = {
    text: ''
};

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
    case TableActions.TABLE_TEXT_CHANGE:
        return { ...state, text: action.payload };
    default:
        return state;
    }
};
