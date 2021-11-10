export const initialState = {
    images: [],
}

export const ADD_IMAGES = "ADD_IMAGES"

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGES :
            return {...state, images: action.payload}
        default:
            return state
    }

}

