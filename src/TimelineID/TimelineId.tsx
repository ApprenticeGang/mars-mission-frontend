import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './TimelineID.module.scss';
// import {roverCurisity, roverOpportunity, roverPerservance, roverSpirt} from './RoverInformation' 
import { RoverExplorer } from "../RoverExplorer/RoverExplorer";
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom';
import Timeline from 'react-image-timeline';
import { getNodeMajorVersion } from "typescript";
import 'react-image-timeline/dist/timeline.scss'; // .scss also available

interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}
export const TimelineId: FunctionComponent = () => {

    const { roverName }: any = useParams();
    const rover: Rover = getRover(roverName)!;
    const events = [
        {
            date: new Date(2013, 9, 27),
            text: `${rover.information}`,
            title: `${rover.name}`,
            buttonText: 'Click Me',
            imageUrl: `${rover.imageUrl}`,
            onClick: console.log,
        }
    ];

    return (

        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {roverName} </h3>
            <RoverImage name={rover.name} information={rover.information} imageUrl={rover.imageUrl} />
            <Timeline events={events} />
        </div>
    )
};
export function getRover(roverName: String): Rover | undefined {
    console.log(roverName);
    return rovers.find(rover => rover.name.toLowerCase() === roverName.toLowerCase())

};

export const RoverImage: FunctionComponent<Rover> = (getRover) => {
    return (
        <section>

            <h2>{getRover.name}</h2>
            <h3>{getRover.information}</h3>
            <img src={getRover.imageUrl} />
        </section>
    )
};

const rovers: Rover[] = [
    { name: "Spirit", information: "Rover on mars 1", imageUrl: "/images/mars-exploration-rover.png" },
    { name: "Opportunity", information: "Rover on mars 2", imageUrl: "/images/oppertunity_rover.png" },
    { name: "Curiosity", information: "Rover on mars 3", imageUrl: "/images/curiosity_rover.png" },
    { name: "Perserverance", information: "Rover on mars 4", imageUrl: "/images/perserverance.png" },
]



