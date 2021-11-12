import React from 'react'
import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery/Gallery";
import SelectedAlbum from "./components/Albums/SelectedAlbum/SelectedAlbum";
import Album from "./components/Albums/Album";

function App() {
        return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/album/:collectionName" component={SelectedAlbum}/>
                <Route path="/album" component={Album}/>
            </Switch>
        </div>
    );
}

export default App;
