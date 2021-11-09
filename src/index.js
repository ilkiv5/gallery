import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux'

import App from './App';
import Album from "./components/Albums/Album";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home";
import SelectedAlbum from "./components/Albums/SelectedAlbum/SelectedAlbum";
import {store} from "./store";
import ImagesContext from "./imagesContext/ImagesContext";

ReactDOM.render(
    <Provider store={store}>
        <ImagesContext>
            <BrowserRouter>
                <App/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/album/:collectionName" component={SelectedAlbum}/>
                    <Route path="/album" component={Album}/>
                    <Route path="/context" component={ImagesContext}/>
                </Switch>
            </BrowserRouter>
        </ImagesContext>
    </Provider>,
    document.getElementById('root')
);

