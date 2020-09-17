import React, {FunctionComponent, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Images} from './imageslist'

export const ImageViewer = () => {
    let Photos = Images[Math.floor(Math.random() * Images.length)];
    const [image, setImage] = useState(`${Photos}`)

    return ( <section>
    <p>Hello world</p>
    <div className= "BigImage"> 
    <img src = {image} />
         </div>
    </section>)
}
