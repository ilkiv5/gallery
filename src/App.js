import React, {useEffect, useState} from 'react'
import './App.css';
import Header from "./components/Header";

import axios from "axios";


function App() {
    const [image, setImage] = useState([])

    async function fetchImage() {
        const response = await axios.get('https://pixabay.com/api/?key=24131407-f84ef8e40fb94c1e54ac238f3&q=yellow+flowers&image_type=photo&pretty=true')
        const urlImage = response.data.hits.map(item => item.previewURL)
        const renderImage = urlImage.map((image, index) => {
            return <img key={index} src={image} alt="dsa"/>
        })
        setImage(renderImage)
    }

    useEffect(()=>{
        fetchImage()
    },[])

    return (
        <div className="App">
            <Header/>
            <div style={{marginTop:'20px'}}>
                {image}
            </div>

        </div>
    );
}

export default App;
