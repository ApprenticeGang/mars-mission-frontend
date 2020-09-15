import React, { useState } from "react";
import styles from './TimelineID.module.scss';

interface TimelineID {
    id: string
}


export function TimelineID() {
    const [id] = useState("");
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id}</h3>
        </div>
    );
}