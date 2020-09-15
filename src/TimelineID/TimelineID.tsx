import React, {FunctionComponent} from "react";
import styles from './TimelineID.module.scss';


export const TimelineID: FunctionComponent = () => {
    const id = "";
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id}</h3>
        </div>
    );
}