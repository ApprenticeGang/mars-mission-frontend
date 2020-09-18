import React, {FunctionComponent} from "react";
import styles from './Homepage.module.scss';
import { NewsArticle } from "../News Articles/NewsArticles";

export const Home: FunctionComponent = () => {
    return (
        <div className={styles.homepage}>
            <h2>Home</h2>
            <NewsArticle />
        </div>
    );
}