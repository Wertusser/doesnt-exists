const labels = (state = [], action) => {
    switch (action.type) {
        case 'SET_LABEL':
            return state.map(label => (
                label.id === action.id ? {id: label.id, value: action.value} : label));
        case 'ADD_LABEL':
            return [...state, {
                    id: action.id,
                    value: 0
                }];
        case 'REMOVE_LABEL':
            return state.filter(label => label.id !== action.id);
        default:
            return state
    }
};

export default labels