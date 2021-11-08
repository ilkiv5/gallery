import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Album from "./components/Albums/Album";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home";
import SelectedAlbum from "./components/Albums/SelectedAlbum/SelectedAlbum";

ReactDOM.render(
    <BrowserRouter>
        <App/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/gallery" component={Gallery}/>
            <Route  path="/album/:collectionName" component={SelectedAlbum}/>
            <Route  path="/album" component={Album}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

