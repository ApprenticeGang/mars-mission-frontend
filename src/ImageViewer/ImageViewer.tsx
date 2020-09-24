import React, { FunctionComponent, useState, useEffect} from "react";
import styles from './ImageViewer.module.scss';
import { images } from "./imageslist";
// import { images, FetchedImageData } from './imageslist'


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

 
    const fetchImages = async (): Promise<GridItem[]> => {
       return fetch("http://localhost:3001/api/rovers/opportunity/images")
       .then(response => response.json())
        
    };
    console.log(fetchImages())
    const [gridItems, setGridItems] = useState<GridItem[]>([{"id":102850,"sol":1002,"cameraName":"RHAZ","cameraFullName":"Rear Hazard Avoidance Camera","imageUrl":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","earthDate":"2015-06-29","roverName":"Opportunity"}])
    
    useEffect(() => {
        fetchImages().then(results => setGridItems(results));
    });

    console.log(gridItems)

    return (
        <div >
            <header className={styles.Header}>
                <h3 className={styles.headerText}>Image Explorer</h3>
            </header>
            <SearchResults gridItems={gridItems}></SearchResults>
            <footer className={styles.Footer}>
                <div className={styles.ImageParent}>
                    <a href="#top" className={styles.Image} aria-label="Scroll to Top" ></a>
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
                <img className={styles.GridImage} src={props.imageUrl}></img>
            </div>
        </section>
    )
};

interface SearchResultProps {
    gridItems: GridItem[];
}


const SearchResults: FunctionComponent<SearchResultProps> = ({gridItems} ) => {

    const photo = gridItems[Math.floor(Math.random() * gridItems.length)];
    console.log(photo)
    const [image, setImage] = useState(photo.imageUrl);

    const gridItemList = gridItems.map((gridItem: GridItemProps) => {
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
