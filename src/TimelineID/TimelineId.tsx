import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './TimelineID.module.scss';
import {roverCurisity, roverOpportunity, roverPerservance, roverSpirt} from './RoverInformation' 
import { RoverExplorer } from "../RoverExplorer/RoverExplorer";
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom';
import Timeline from 'react-image-timeline';

require('react-image-timeline/dist/timeline.css'); // .scss also available

interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}
export const TimelineId: FunctionComponent = () => {

    const events = [
        {
            date: new Date(2013, 9, 27),
            text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
            title: "Cairo, Egypt",
            buttonText: 'Click Me',
            imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
            onClick: console.log,
        }
    ];

    return <Timeline events={events} />
    // const {id}: any = useParams();
    // const [roverName, setRoverName] = useState<Rover>();
    // useEffect(() => {
    //     fetch(`http://localhost:3000/timeline/${id}`)
    //     .then(() => setRoverName(roverName?id:String))

    //   }, []);
    // return (
    //     <div className={styles.timelineID}>
    //         <h3>The current Timeline Id is: {id} </h3>
    //         <RoverImage name="Spirit" information="Rover on mars" imageUrl= "/images/mars-exploration-rover.png"/>
    //     </div>
    // );
}

// export const RoverImage: FunctionComponent<Rover> = (props) => {
//     return (
//         <section>
//             <h2>{props.name}</h2>
//             <h3>{props.information}</h3>
//             <img src = {props.imageUrl}/>
//         </section>
//     )
// };