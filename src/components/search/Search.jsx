import React from 'react';
import {Input} from '@mui/material'
import classes from './Search.module.css'

const Search = ({searchText,setSearchText,placeholder}) => {
    return (
        <div className={classes.search}>
            <Input  placeholder={placeholder} value={searchText} onChange={event=>setSearchText(event.target.value)}/>
        </div>
    );
};

export default Search;