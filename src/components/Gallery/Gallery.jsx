import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import cn from 'classnames';
import { IoAddCircleSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../UI/Modal/Modal';
import Search from '../Search/Search';
import cl from './Gallery.module.css';
import axios from 'axios';
import { PIXABAY_API_URL } from '../constants';
import {
  ADD_IMAGES,
  IMAGES_FETCH_ERROR,
  IMAGES_FETCH_SUCCESS
} from '../../store/searchImagesCollection';

const Gallery = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [createCollection, setCreateCollection] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [imageData, setImageData] = useState({});
  const [options, setOptions] = useState({ ...localStorage });

  const dispatch = useDispatch();
  const imagesState = useSelector((state) => state.imagesReducer.images);

  const fetchImage = async () => {
    try {
      dispatch({ type: ADD_IMAGES });
      const response = await axios.get(
        `${PIXABAY_API_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchText}&image_type=photo`
      );
      const { data } = response;
      dispatch({ type: IMAGES_FETCH_SUCCESS, payload: data.hits });
    } catch (error) {
      dispatch({ type: IMAGES_FETCH_ERROR, payload: error });
      console.log(error);
    }
  };

  const addDataImageToCollection = () => {
    const collectionsImages = JSON.parse(localStorage.getItem(selectedOption)) || [];
    collectionsImages.push(imageData);
    localStorage.setItem(selectedOption, JSON.stringify(collectionsImages));
  };

  const handleAddItemToLocalStorage = () => {
    const updatedOptions = { ...options, [createCollection]: [] };
    setOptions(updatedOptions);
    localStorage.setItem(createCollection, JSON.stringify([]));
    setCreateCollection('');
  };

  useEffect(() => {
    if (!imagesState.length) {
      fetchImage();
    }
  }, []);

  useEffect(() => {
    if (searchText) {
      fetchImage();
    }
  }, [searchText]);

  return (
    <div className={cn(cl.main_container)}>
      <Modal visible={isOpenModal} handleSetVisible={setIsOpenModal}>
        <h2> Select collection</h2>
        <div className={cn(cl.createCollection)}>
          <Input
            value={createCollection}
            placeholder="Create collection"
            onChange={(event) => setCreateCollection(event.target.value)}
          />
          <Button
            sx={{ fontSize: '10px', marginLeft: '10px' }}
            variant="contained"
            color="success"
            onClick={handleAddItemToLocalStorage}>
            Create
          </Button>
        </div>
        <p>Collections :</p>
        <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
          {Object.keys(options).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <div>
          <Button
            sx={{ fontSize: '10px', marginTop: '10px' }}
            variant="contained"
            color="success"
            onClick={addDataImageToCollection}>
            Add
          </Button>
        </div>
        <div>
          <Button
            sx={{ fontSize: '10px', marginTop: '10px' }}
            variant="contained"
            color="error"
            onClick={() => setIsOpenModal(false)}>
            Close
          </Button>
        </div>
      </Modal>

      <div className={cl.search}>
        <Search value={searchText} setSearchText={setSearchText} placeholder="Search..." />
      </div>
      <div className={cl.gallery}>
        {imagesState.map(({ previewURL, id, tags }, index) => (
          <div className={cl.images} key={id}>
            <img src={previewURL} alt={`photo_${index}`} />
            <IoAddCircleSharp
              onClick={() => {
                setImageData({ previewURL: previewURL, id: id, tags: tags });
                setIsOpenModal(true);
              }}
              className={cl.button}></IoAddCircleSharp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

