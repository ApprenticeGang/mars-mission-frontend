import React, { FunctionComponent, useState, useEffect } from "react";
import styles from './TimelineID.module.scss';
import {roverCurisity, roverOpportunity, roverPerservance, roverSpirt} from './RoverInformation' 
import { RoverExplorer } from "../RoverExplorer/RoverExplorer";
import { useParams } from "react-router-dom";

<<<<<<< HEAD
=======


interface Rover {
    name: string;
    information: string;
    imageUrl: string;
}
>>>>>>> 11561178191b5d3281d34e6f7d85df652f6538a4
export const TimelineId: FunctionComponent = () => {

    const {id}: any = useParams();

    const [roverName, setRoverName] = useState<Rover>();
    useEffect(() => {
        fetch(`http://localhost:3000/timeline/${id}`)
        .then(() => setRoverName(roverName?id:String))

      }, []);
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id} </h3>
            <RoverImage name="Spirit" information="Rover on mars" imageUrl= "/images/mars-exploration-rover.png"/>
        </div>
    );
}

export const RoverImage: FunctionComponent<Rover> = (props) => {
    return (
        <section>
            <h2>Rover:</h2>
            <h2>{props.name}</h2>
            <h3>{props.information}</h3>
            <img src = {props.imageUrl}/>
        </section>
    )
};