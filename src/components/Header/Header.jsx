import React from 'react';
import AppBar from "@mui/material/AppBar";
import cn from 'classnames'
import classes from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>

            <AppBar position="static" style={{backgroundColor: 'teal',}}>
                <div className={cn(classes.header_text)} style={{height: '40px'}}>
                    <Link className={classes.nav} to="/">Home</Link>
                    <Link className={classes.nav} to="/album">album</Link>
                    <Link className={classes.nav} to="/gallery">gallery</Link>
                </div>
            </AppBar>
        </div>
    );
};

export default Header;