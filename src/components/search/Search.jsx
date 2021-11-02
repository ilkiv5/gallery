import React from 'react';
import {Input} from '@mui/material'
import classes from './Search.module.css'

const Search = ({value,setValue}) => {
    return (
        <div className={classes.search}>
            <Input  placeholder="Search..." value={value} onChange={event=>setValue(event.target.value)}/>
        </div>
    );
};

export default Search;