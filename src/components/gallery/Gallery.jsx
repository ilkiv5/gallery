import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './Gallery.module.css'
import {PIXABAY_API_URL} from '../constants'


const Gallery = () => {
    const [images, setImages] = useState([])

    const fetchImage = async () => {
        const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo`)
        setImages(response.data.hits.map(item => ({previewURL: item.previewURL, 'id': item.id})))
    }

    useEffect(()=>{
        fetchImage()
    },[])

    return (
        <div className={classes.gallery}>
            {images.map((image) => (<img key={image.id} src={image.previewURL} alt="dsa"/>))}
        </div>
    );
};

export default Gallery;