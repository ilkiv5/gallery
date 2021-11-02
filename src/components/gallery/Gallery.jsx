import React, { useEffect, useState} from 'react';
import axios from "axios";
import classes from './Gallery.module.css'
import {PIXABAY_API_URL} from '../constants'
import Search from "../search/Search";

const Gallery = () => {
    const [images, setImages] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchImage = async () => {
            const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${value}&image_type=photo`)
                .catch(err => console.log(err))
            setImages(response.data.hits.map(item => ({previewURL: item.previewURL, 'id': item.id})))
        }
        fetchImage()
    }, [value])

    return (
        <div className={classes.gallery}>
            <div className={classes.form}>
                <Search value={value} setValue={setValue}/>
            </div>
            {images.map((image) => (<img key={image.id} src={image.previewURL} alt="not found"/>))}
        </div>
    );
};

export default Gallery;