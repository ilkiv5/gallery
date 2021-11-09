import React, {useContext} from 'react';
import {useDispatch} from "react-redux";
import {ImageContext} from "../imagesContext/ImagesContext";

const Home = () => {

    const dispatch = useDispatch()
    const {images } = useContext(ImageContext)


    return (
        <div>

        </div>
    )
};

export default Home;