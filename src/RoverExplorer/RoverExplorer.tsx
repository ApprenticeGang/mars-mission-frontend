import React, {FunctionComponent} from "react";
import styles from './RoverExplorer.module.scss';
import {
  Link
} from "react-router-dom";


export const RoverExplorer: FunctionComponent = () => {
    return (
        <div className={styles.roverExplorer}>
            <h2>Rover Explorer</h2>;
        </div>
    );
}