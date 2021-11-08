import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import {useParams, useHistory} from "react-router-dom";
import Modal from "../../UI/Modal/Modal";
import cl from './SelectedAlbum.module.css'

const SelectedAlbum = () => {
    const [collection, setCollection] = useState([])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [newCollectionName, setNewCollectionName] = useState('')

    const history = useHistory()
    const {collectionName} = useParams()

    const getCollection = () => {
        const currentCollection = localStorage.getItem(collectionName)
        if (currentCollection) {
            setCollection(JSON.parse(currentCollection))
        }
    }

    const renameCollection = () => {
        const previousCollectionName = JSON.parse(localStorage.getItem(collectionName))
        localStorage.setItem(newCollectionName, JSON.stringify(previousCollectionName))
        localStorage.removeItem(collectionName)
    }

    useEffect(getCollection,[collectionName])

    return (
        <div>
            <div>
                <Button sx={{fontSize: '10px', marginTop: '10px', left:'40%'}} variant="contained" color="success"
                        onClick={() => setIsOpenModal(true)}>
                    Edit {collectionName}
                </Button>
            </div>

            <Modal visible={isOpenModal} handleSetVisible={setIsOpenModal}>
                <div className={cl.album__modal_header}>
                    <span>Edit collection <strong>{collectionName}</strong></span>
                </div>
                <Input placeholder="Enter new name" type="text"
                       onChange={(event) => setNewCollectionName(event.target.value)}/>
                <Button sx={{fontSize: '10px', marginTop: '10px', marginLeft: '10px'}} variant="contained"
                        color="success"
                        onClick={()=>{
                            renameCollection()
                            setIsOpenModal(false)
                            history.push(`/album/${newCollectionName}`)
                        }}>
                    Edit
                </Button><br/>
                <Button sx={{fontSize: '10px', marginTop: '10px'}} variant="contained" color="error"
                        onClick={() => setIsOpenModal(false)}>
                    Close
                </Button>
            </Modal>
            {collection.map(({previewURL,id}, index) => (
                <div key={id} className={cl.gallery}>
                    <img src={previewURL} alt={`photo_+${index}`}/>
                </div>
            ))}
        </div>
    );
};

export default SelectedAlbum;