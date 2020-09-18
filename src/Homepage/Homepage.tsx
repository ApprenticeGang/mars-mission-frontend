import React, {FunctionComponent} from "react";
import styles from './Homepage.module.scss';

export const Home: FunctionComponent = () => {
    return (
        <div className={styles.homepage}>
            <h2> Home</h2>
        </div>
    );
}