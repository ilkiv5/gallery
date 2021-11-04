import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './Gallery.module.css'
import {PIXABAY_API_URL} from '../constants'
import Search from "../search/Search";
import {IoAddCircleSharp} from 'react-icons/io5'
import Modal from "../UI/modal/Modal";
import Button from '@mui/material/Button';
import {Input} from '@mui/material'


const Gallery = () => {
    const [images, setImages] = useState([])
    const [searchText, setSearchText] = useState('')
    const [modal, setModal] = useState(false)
    const [addCollection, setAddCollection] = useState('')
    const [select, setSelect] = useState('')
    const [dataFromImage, setDataFromImage] = useState({})
    const [options, setOptions] = useState({...localStorage})

    const fetchImage = async () => {
        try {
            const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo`)
            setImages(response.data.hits.map(item => ({previewURL: item.previewURL, 'id': item.id, 'tags': item.tags})))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchImage()
        showCollection()
    }, [searchText])


    const getItem = () => {
        const arr = JSON.parse(localStorage.getItem(select)) || [];
        arr.push(dataFromImage)
        localStorage.setItem(select, JSON.stringify(arr))
    }

    const addItemToLocalStorage = () => {
        const updatedOptions = {...options, [addCollection]: []}
        setOptions(updatedOptions)
        localStorage.setItem(`${addCollection}`, JSON.stringify([]))
        setAddCollection('')
    }

    const showCollection = () => {
        let arr = []
        for (let i = 0, len = localStorage.length; i < len; ++i) {
            arr.push(localStorage.key(i));
        }
        return arr
    }

    return (
        <div className={classes.main_container}>
            <Modal visible={modal} setVisible={setModal}>
                <h2> In which collection to add?</h2>
                <div style={{margin: '15px 0'}}>
                    <Input value={addCollection} placeholder="Create collection"
                           onChange={(event) => setAddCollection(event.target.value)}/>
                    <Button variant="contained" color="success" style={{marginLeft: '10px', fontSize: '10px'}}
                            onClick={addItemToLocalStorage}>
                        Create
                    </Button>
                </div>
                <p>Collections :</p>
                <select value={select} onChange={(event) => setSelect(event.target.value)}>
                    {Object.keys(options).map(item => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                <div>
                    <Button style={{marginTop: '10px', fontSize: '10px'}} variant="contained" color="success"
                            onClick={getItem}>
                        Add
                    </Button>
                </div>
                <div>
                    <Button variant="contained" color="error" style={{marginTop: '10px', fontSize: '10px'}}
                            onClick={() => setModal(false)}>
                        Close
                    </Button>
                </div>
            </Modal>

            <div className={classes.search}>
                <Search value={searchText} setSearchText={setSearchText} placeholder="Search..."/>
            </div>
            <div className={classes.gallery}>
                {images.map((image) => (
                    <div className={classes.images} key={image.id}>
                        <img
                            src={image.previewURL}
                            alt="not found"/>
                        <IoAddCircleSharp
                            onClick={() => {
                                setDataFromImage({previewURL: image.previewURL, 'id': image.id, 'tags': image.tags})
                                setModal(true);
                            }}
                            className={classes.button}>
                            Add
                        </IoAddCircleSharp>
                    </div>))}
            </div>
        </div>
    );
};

export default Gallery;