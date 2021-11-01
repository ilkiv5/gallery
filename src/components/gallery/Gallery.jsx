import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './Gallery.module.css'

const Gallery = () => {
    const [images, setImages] = useState([])

    const fetchImage = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo`)

        const urlImage = response.data.hits.map(item => {
            return {previewURL: item.previewURL, 'id': item.id}
        })

        const renderImage = urlImage.map((image) => {
            return <img key={image.id} src={image.previewURL} alt="dsa"/>
        })
        setImages(renderImage)
    }
    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <div className={classes.gallery}>
            {images}
        </div>
    );
};

export default Gallery;