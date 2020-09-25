import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './ImageViewer.module.scss';
import { useParams } from "react-router-dom";
import { off } from "process";
interface GridItem {
    id: number;
    sol: number;
    cameraName: string;
    cameraFullName: string;
    imageUrl: string;
    earthDate: string;
    roverName: string;
    rover: string;
}

interface RoverName {
    roverName: string;
}

export const ImageViewer: FunctionComponent = () => {



    /* istanbul ignore next */
    const roverName: RoverName = useParams();
    console.log(roverName.roverName)
    const fetchImages = async (): Promise<GridItem[]> => {
        return fetch(`${process.env.REACT_APP_API_URL}/api/rovers/${roverName.roverName}/images`)
            .then(response => response.json())
            .then(data => data as GridItem[])
    };
    const [gridItems, setGridItems] = useState<GridItem[]>([])
    useEffect(() => {
        fetchImages().then(results => setGridItems(results));
    }, []);


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
/* istanbul ignore next */
const Item: FunctionComponent<GridItemProps> = (props: GridItemProps) => {
    const OverlayOff = styles.OverlayOff
    const OverlayOn = styles.OverlayOn
    const [style, setStyle] = useState(OverlayOff)
    const Off = () => {
        setStyle(OverlayOff)
    }
    const On = () => {
        setStyle(OverlayOn)
    }
    return (
        <section>
            <div className={styles.GridItem}>
                <div className={styles.Info} >{props.id}, {props.sol}, {props.cameraName}, {props.cameraFullName}, {props.earthDate}, {props.roverName}</div>
                <img onClick={() => { On() }} alt="grid picture" className={styles.GridImage} src={props.imageUrl}></img>
            </div>

            <div className={style} onClick={() => { Off() }}>
                <div className={styles.imgBG}>
            
                    <img className={styles.imgCarousel} src={props.imageUrl} alt=""></img>
                    <div className={styles.imgInfo}>
                        <div className={styles.infoWrapper}>
                            <p>ID: {props.id}</p>
                            <p>Sol: {props.sol}</p>
                            <p>Earth Date: {props.earthDate}</p>
                            {/* <p>: {props.earthDate}</p> */}
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    )
};

interface SearchResultProps {
    gridItems: GridItem[];
}

/* istanbul ignore next */
const SearchResults: FunctionComponent<SearchResultProps> = ({ gridItems }) => {
    let image: string | undefined = undefined;
    if (gridItems.length > 0) {
        image = gridItems[Math.floor(Math.random() * gridItems.length)].imageUrl;
    }
    /* istanbul ignore next */
    const gridItemList = gridItems.map((gridItem: GridItemProps) => {
        return <Item id={gridItem.id} sol={gridItem.sol} cameraName={gridItem.cameraName} cameraFullName={gridItem.cameraFullName} imageUrl={gridItem.imageUrl} earthDate={gridItem.earthDate} roverName={gridItem.roverName}></Item>
    })
    return (
        /* istanbul ignore next */
        <div className={styles.ParentGrid}>
            <div className={styles.BigImage}>
                {image && <img className={styles.TopImage} src={image} />}
            </div >
            <div className={styles.GridContainer}>
                {gridItemList}
            </div>

        </div>

    )
};