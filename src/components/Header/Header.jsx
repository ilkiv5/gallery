import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import classes from './Header.module.css'

const Header = () => {
    return (
        <AppBar position="static" style={{backgroundColor:'teal'}}>
            <Toolbar className={classes.header_text}>
                Gallery
            </Toolbar>
        </AppBar>
    );
};

export default Header;