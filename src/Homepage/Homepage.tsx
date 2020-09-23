import React, {FunctionComponent} from "react";
import styles from './Homepage.module.scss';
import { NewsArticles } from "../News Articles/NewsArticles";
import { Link } from "react-router-dom";
import { Mars } from "../InteractiveMars/Mars";

export const Home: FunctionComponent = () => {
    return (
        <div className={styles.homepage}>
            <h2>Home</h2>
            <Link to="/rover_explorer" className={styles.marsbutton}> ENTER MARS</Link>
            <Mars />
            <NewsArticles />
        </div>
    );
}