import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './ImageViewer.module.scss';
import { images, FetchedImageData } from './imageslist'


interface GridItem {
    id: number;
    sol: number;
    cameraName: string;
    cameraFullName: string;
    imageUrl: string;
    earthDate: string;
    roverName: string;
}

export const ImageViewer: FunctionComponent = () => {

    const fetchImages = async (): Promise<FetchedImageData[]> => {
        await Promise.resolve(images);
        return images;
    };
    const [gridItems, setGridItems] = useState<GridItem[]>(images)
    
    useEffect(() => {
        void fetchImages().then(results => setGridItems(results));
    });


    return (
        <div >
            <header className={styles.Header}>
                <h3 className={styles.headerText}>Image Explorer</h3>
            </header>
            <SearchResults gridItems={gridItems}></SearchResults>
            <footer className={styles.Footer}>
                <div className={styles.ImageParent}>
                    {/* eslint-disable-next-line */}
                    <a href="#top" className={styles.Image} aria-label="Scroll to Top"></a>
                </div>

            </footer>
        </div>
    );
};

interface GridItemProps {
    id: number;
    sol: number;
    cameraName: string;
    cameraFullName: string;
    imageUrl: string;
    earthDate: string;
    roverName: string;
}
const Item: FunctionComponent<GridItemProps> = (props: GridItemProps) => {
    return (
        <section>
            <div className={styles.GridItem}>
                <div className={styles.Info}>{props.id}, {props.sol}, {props.cameraName}, {props.cameraFullName}, {props.earthDate}, {props.roverName}</div>
                <img alt="" className={styles.GridImage} src={props.imageUrl}></img>
            </div>
        </section>
    )
};

interface SearchResultProps {
    gridItems: GridItem[];
}

const SearchResults: FunctionComponent<SearchResultProps> = (props: SearchResultProps) => {

    const photo = images[Math.floor(Math.random() * images.length)];
    const [image] = useState(`${photo.imageUrl}`);

    const gridItemList = props.gridItems.map((gridItem: GridItemProps) => {
        return <Item id={gridItem.id} sol={gridItem.sol} cameraName={gridItem.cameraName} cameraFullName={gridItem.cameraFullName} imageUrl={gridItem.imageUrl} earthDate={gridItem.earthDate} roverName={gridItem.roverName}></Item>
    })
    return (


        <div className={styles.ParentGrid}>
            <div className={styles.BigImage}>
                <img alt="" className={styles.TopImage} src={image} />
            </div >
            <div className={styles.GridContainer}>
                {gridItemList}
            </div>

        </div>

    )


};
