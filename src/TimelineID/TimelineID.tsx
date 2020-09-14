import React, { useState } from "react";
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import styles from './TimelineID.module.scss';

interface TimelineID {
    id: string
}


export function TimelineID() {
    const [id, setid] = useState("");
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id}</h3>
        </div>
    );
}