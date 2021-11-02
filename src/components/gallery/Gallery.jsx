import React, { useEffect, useState} from 'react';
import axios from "axios";
import classes from './Gallery.module.css'
import {PIXABAY_API_URL} from '../constants'
import Search from "../search/Search";

const Gallery = () => {
    const [images, setImages] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
            const fetchImage = async () => {
                try{
                    const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo`)
                    setImages(response.data.hits.map(item => ({previewURL: item.previewURL, 'id': item.id})))
                } catch(error){
                    console.log(error)
                }
            }
        fetchImage()
    }, [searchText])

    return (
        <div className={classes.gallery}>
            <div className={classes.form}>
                <Search value={searchText} setSearchText={setSearchText}/>
            </div>
            {images.map((image) => (<img key={image.id} src={image.previewURL} alt="not found"/>))}
        </div>
    );
};

export default Gallery;