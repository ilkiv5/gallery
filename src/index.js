import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

import App from './App';
import {store} from "./store";
import ImagesContext from "./imagesContext/ImagesContext";

ReactDOM.render(
    <Provider store={store}>
        <ImagesContext>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ImagesContext>
    </Provider>,
    document.getElementById('root')
);

