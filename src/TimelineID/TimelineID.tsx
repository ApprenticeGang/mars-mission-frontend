import React, { useState } from "react";
import styles from './TimelineID.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

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