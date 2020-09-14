import React from "react";
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import styles from './TimelineID.module.scss';


export function TimelineID() {
    let { id } = useParams();
    return (
        <div className={styles.timelineID}>
            <h3>The current Timeline Id is: {id}</h3>
        </div>
    );
  }