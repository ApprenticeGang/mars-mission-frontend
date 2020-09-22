import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './ImageViewer.module.scss';
import { images } from './imageslist'


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

    
    const [gridItems, setGridItems] = useState<GridItem[]>(images)
   

    useEffect(() => {
        setGridItems(images)
    }, []);

    return (
        <div >
            <div className="container">
                <header className={styles.Header}> 
                <h3 className={styles.headerText}>Image Explorer</h3>
                </header>
            </div>
              <SearchResults gridItems={gridItems}></SearchResults>
            <footer className={styles.Footer}>
                <div className={styles.imageParent}>
                    <a href="#top" className={styles.image}  aria-label="Scroll to Top" ></a>
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
const Item:FunctionComponent<GridItemProps> =  (props: GridItemProps) => {
    return (
        <section>
            <div className={styles.GridItem}>
                <div className={styles.Info}>{props.id}, {props.sol}, {props.cameraName}, {props.cameraFullName}, {props.earthDate}, {props.roverName}</div>
                <img className={styles.GridImage} src={props.imageUrl}></img>
            </div>
        </section>
    )
};

interface SearchResultProps {
    gridItems: GridItem[];
}


const SearchResults: FunctionComponent<SearchResultProps> = (props: SearchResultProps) => {

    const photo = images[Math.floor(Math.random() * images.length)];
    const [image, setImage] = useState(`${photo.imageUrl}`);

    const gridItemList = props.gridItems.map((gridItem: GridItemProps) => {
        return <Item id={gridItem.id} sol={gridItem.sol} cameraName={gridItem.cameraName} cameraFullName={gridItem.cameraFullName} imageUrl={gridItem.imageUrl} earthDate={gridItem.earthDate} roverName={gridItem.roverName}></Item>
    })
    return (

        
            <div className={styles.ParentGrid}>
                <div className={styles.BigImage}>
                    <img className={styles.TopImage} src={image} />
                </div >
                <div className={styles.GridContainer}>
                    {gridItemList}
                </div>

            </div>
      
    )


};
