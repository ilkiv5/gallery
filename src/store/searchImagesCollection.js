export const initialState = {
  images: [],
  isLoading: false,
  error: null
};

export const ADD_IMAGES = 'ADD_IMAGES';
export const IMAGES_FETCH_SUCCESS = 'IMAGES_FETCH_SUCCESS';
export const IMAGES_FETCH_ERROR = 'IMAGES_FETCH_ERROR';

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES:
      return { ...state, isLoading: true };
    case IMAGES_FETCH_SUCCESS:
      return { ...state, images: action.payload, isLoading: false };
    case IMAGES_FETCH_ERROR:
      return { ...state, error: action.payload.error, isLoading: false };
    default:
      return state;
  }
};
