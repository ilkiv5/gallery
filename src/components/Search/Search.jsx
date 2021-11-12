import React from 'react';
import { Input } from '@mui/material';
import classes from './Search.module.css';

// eslint-disable-next-line react/prop-types
const Search = ({ searchText, setSearchText, placeholder }) => {
  return (
    <div className={classes.search}>
      <Input
        placeholder={placeholder}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  );
};

export default Search;
