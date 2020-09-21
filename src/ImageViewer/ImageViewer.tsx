import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './ImageViewer.module.scss';
import {
    BrowserRouter as Router, Switch, Route, Link, useParams
} from "react-router-dom";
import { Images } from './imageslist'


interface GridItem {
    id: number,
    sol: number,
    cameraName: string,
    cameraFullName: string,
    imageUrl: string,
    earthDate: string,
    roverName: string
}


// const getImages: any =(roverName: string) =>{
//     return Images.filter(image => image.roverName === roverName);
// }

export const ImageViewer: FunctionComponent = () => {

    const [search, setSearch] = useState("");
    const [gridItems, setGridItems] = useState<GridItem[]>(Images)
    const [mode, setMode] = useState('Loading');


    interface Results {
    id: number,
    sol: number,
    cameraName: string,
    cameraFullName: string,
    imageUrl: string,
    earthDate: string,
    roverName: string 
    }

    // useEffect(() => {
    //     getImages(search)
    //         .then(results  => setGridItems(results));
    // }, [search]);

    useEffect(() => {
        setMode("Loading")
        setGridItems(Images)
        setMode('Ready')
    }, [search])


    return (
        <div >
                <header className={styles.Header}>
                   
                    {/* <input className={styles.SearchBar} type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} ></input> */}
                   
                </header>

                {mode === 'Ready' && <SearchResults gridItems={gridItems}></SearchResults>}
                {mode === 'Loading' && <p>Loading</p>}

                <footer className={styles.Footer}></footer>
       
        </div>
    );
}

interface GridItemProps {
    id: number,
    sol: number,
    cameraName: string,
    cameraFullName: string,
    imageUrl: string,
    earthDate: string,
    roverName: string
}

const Item = (props: GridItemProps) => {
    return (
    
        <section>
            <Link to ={`/image/${props.id}`}></Link>
            <div className={styles.GridItem}>
                <div className={styles.Info}>{props.id}, {props.sol}, {props.cameraName}, {props.cameraFullName}, {props.earthDate}, {props.roverName}</div>
                <img className={styles.GridImage} src={props.imageUrl}></img>
            </div>
        </section>
    )
}

interface SearchResultProps {
    gridItems: GridItem[];
}


const SearchResults = (props: SearchResultProps) => {

    let Photos = Images[Math.floor(Math.random() * Images.length)];
    const [image, setImage] = useState(`${Photos.imageUrl}`);

    const gridItemList = props.gridItems.map((gridItem: GridItemProps) => {
        return <Item id={gridItem.id} sol={gridItem.sol} cameraName={gridItem.cameraName} cameraFullName={gridItem.cameraFullName} imageUrl={gridItem.imageUrl} earthDate={gridItem.earthDate} roverName={gridItem.roverName}></Item>
    })

    if (props.gridItems.length === 0) {
        return (
            <p> No Results</p>
        )
    }
    return (

        <div className={styles.Content}>
            <div className={styles.ParentGrid}>
                <div className={styles.BigImage}>
                    <img className={styles.TopImage} src={image} />
                </div >
                <div className={styles.GridContainer}>
                    {gridItemList}
                </div>
             
            </div>
        </div>
   



    )


}
