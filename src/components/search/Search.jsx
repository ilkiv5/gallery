import React from 'react';
import {Input} from '@mui/material'
import classes from './Search.module.css'

const Search = ({searchText,setSearchText}) => {
    return (
        <div className={classes.search}>
            <Input  placeholder="Search..." value={searchText} onChange={event=>setSearchText(event.target.value)}/>
        </div>
    );
};

export default Search;