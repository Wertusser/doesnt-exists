const images = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_IMAGES':
            return [...state, ...action.images];
        default:
            return state
    }
};

export default images