import React, { useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {Input} from '@mui/material'
import axios from "axios";
import cn from 'classnames'
import {IoAddCircleSharp} from 'react-icons/io5'
import Modal from "../UI/Modal/Modal";
import Search from "../Search/Search";
import cl from './Gallery.module.css'
import {PIXABAY_API_URL} from '../constants'

const Gallery = () => {
    const [images, setImages] = useState([])
    const [searchText, setSearchText] = useState('')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [createCollection, setCreateCollection] = useState('')
    const [selectedOption , setSelectedOption] = useState('')
    const [imageData, setImageData] = useState({})
    const [options, setOptions] = useState({...localStorage})

    const fetchImage = async () => {
        try {
            const response = await axios.get(`${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo`)
            setImages(response.data.hits.map(item => ({previewURL: item.previewURL, id: item.id, tags: item.tags})))
        } catch (error) {
            console.log(error)
        }
    }

    const addDataImageToCollection = () => {
        const collectionsImages = JSON.parse(localStorage.getItem(selectedOption )) || [];
        collectionsImages.push(imageData)
        localStorage.setItem(selectedOption , JSON.stringify(collectionsImages))
    }

    const  handleAddItemToLocalStorage = () => {
        const updatedOptions = {...options, [createCollection]: []}
        setOptions(updatedOptions)
        localStorage.setItem(createCollection, JSON.stringify([]))
        setCreateCollection('')
    }

   useEffect(() => {
         fetchImage()
    }, //eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText])

    return (
        <div className={cn(cl.main_container)}>
            <Modal visible={isOpenModal} handleSetVisible={setIsOpenModal}>
                <h2> Select collection</h2>
                <div className={cn(cl.createCollection)}>
                    <Input value={createCollection} placeholder="Create collection"
                           onChange={(event) => setCreateCollection(event.target.value)}/>
                    <Button sx={{fontSize:'10px', marginLeft:'10px'}} variant="contained" color="success"
                            onClick={ handleAddItemToLocalStorage}>
                        Create
                    </Button>
                </div>
                <p>Collections :</p>
                <select value={selectedOption } onChange={(event) => setSelectedOption(event.target.value)}>
                    {Object.keys(options).map(item => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
                <div>
                    <Button sx={{fontSize:'10px', marginTop:'10px'}}  variant="contained" color="success"
                            onClick={addDataImageToCollection}>
                        Add
                    </Button>
                </div>
                <div>
                    <Button sx={{fontSize:'10px', marginTop:'10px'}} variant="contained" color="error"
                            onClick={() => setIsOpenModal(false)}>
                        Close
                    </Button>
                </div>
            </Modal>

            <div className={cl.search}>
                <Search value={searchText} setSearchText={setSearchText} placeholder="Search..."/>
            </div>
            <div className={cl.gallery}>
                {images.map((image, index) => (
                    <div className={cl.images} key={image.id}>
                        <img
                            src={image.previewURL}
                            alt={`photo_${index}`}/>
                        <IoAddCircleSharp
                            onClick={() => {
                                setImageData({previewURL: image.previewURL, id: image.id, tags: image.tags})
                                setIsOpenModal(true);
                            }}
                            className={cl.button}>
                            Add
                        </IoAddCircleSharp>
                    </div>))}
            </div>
        </div>
    );
};

export default Gallery;