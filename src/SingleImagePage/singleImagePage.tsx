import React, { FunctionComponent } from "react";
import styles from './singleImagePage.module.scss';

export interface RoverImage {
    id: number;
    sol: number;
    cameraName: string;
    cameraFullName: string;
    imageUrl: string;
    earthDate: string;
    roverName: string;
}

interface ImageProps {
    image: RoverImage;
}

export const SingleImagePage: FunctionComponent<ImageProps> = ({image}) => {

    return (
        <section>
            <div className={styles.imgBG}>
            <img className={styles.imgCarousel} src={image.imageUrl} alt=""></img>
            <div className={styles.imgInfo}>
            <p>ID: {image.id}</p>
            <p>Sol: {image.sol}</p>
            </div>
            </div> 
        </section>
    )
}