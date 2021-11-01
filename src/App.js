import React from 'react'
import './App.css';
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Slider from "./components/Slider";
import Dialog from "./components/Dialog"
import ImageList from "./components/ImageList";

function App() {
    return (
        <div className="App">
            <Header/>
            <Buttons/>
            <Slider/>
            <Dialog/>
            <ImageList/>
        </div>
    );
}

export default App;
