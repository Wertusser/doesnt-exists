export const addLabel = id => ({
    type: 'ADD_LABEL',
    id
});

export const removeLabel = id => ({
    type: 'REMOVE_LABEL',
    id
});

export const setLabel = (id, value) => ({
    type: 'SET_LABEL',
    id,
    value
});

export const generate = (labels, url, is_shuffled) => {
    const path = "https://cors-post.herokuapp.com/" + url;
    return dispatch => {
        fetch(path + "/api/generate", {
            method: "POST",
            body: JSON.stringify({labels, is_shuffled})
        })
            .then(res => {
                console.log(res.headers);
                return res.json()
            })
            .then(imgs => {
                console.log(imgs);
                dispatch(updateImages(imgs))
            }).catch(e => console.error(e));
    }
};

export const updateImages = (images) => ({
    type: 'UPDATE_IMAGES',
    images
});