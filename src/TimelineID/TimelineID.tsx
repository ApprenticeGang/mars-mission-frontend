import React from "react";
import styles from './TimelineID.module.scss';


export function TimelineID() {
    const id = "";
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id}</h3>
        </div>
    );
}