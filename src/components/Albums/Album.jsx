import React from 'react';
import {IoFolderOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import cl from './Album.module.css'

const Album = () => {
    const collections = {...localStorage}
    const history = useHistory()

    const pushHistory = (collection)=>{
        history.push('/album/' + collection)
    }

    return (
        <div>
            <div className={cl.album__collection}>
                {Object.keys(collections).map((collection) => (
                    <div className={cl.album__item} key={collection}
                         onClick={() => {
                             pushHistory(collection)
                         }}
                    >
                        <span ><IoFolderOutline/> {collection}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;