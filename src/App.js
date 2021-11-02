import React from 'react'
import './App.css';
import Header from "./components/Header";
import Gallery from "./components/gallery/Gallery";

function App() {
    return (
        <div className="App">
            <Header/>
            <Gallery/>
        </div>
    );
}

export default App;
