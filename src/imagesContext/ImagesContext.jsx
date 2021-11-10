import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import {ADD_IMAGES, imagesReducer,initialState} from '../store/searchImagesCollection'
import {PIXABAY_API_URL} from "../components/constants";

export const ImageContext = React.createContext()

const ImagesContext = (props) => {
    const [state, dispatch] = useReducer(imagesReducer, initialState)

    const fetchImage = async (searchImages) => {
        try {
            const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchImages}&image_type=photo`)
            const images = response.data.hits.map(item => ({previewURL: item.previewURL, id: item.id, tags: item.tags}))
            dispatch({type:ADD_IMAGES, payload:images})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <>
            <ImageContext.Provider value={{images:state.images, fetchImage}}>
            {props.children}
            </ImageContext.Provider>
        </>
    );
};

export default ImagesContext;