import React, {FunctionComponent} from "react";
import styles from './RoverExplorer.module.scss';
import { Link } from "react-router-dom";


export const RoverExplorer: FunctionComponent = () => {
    return (
        <section>
        <div className={styles.Content}>
          <header className={styles.Header}><h1 className={styles.HeaderText}>Rover Explorer</h1></header>
          <div className={styles.GridContainer}>
            <Link to="/timeline/perserverance" className={styles.GridItem1}>Perserverance</Link>
            <Link to="/timeline/oppertunity" className={styles.GridItem2}>Oppertunity</Link>
            <Link to="/timeline/spirit" className={styles.GridItem3}>Spirit</Link>
            <Link to="/timeline/curiosity" className={styles.GridItem4}>Curiosity</Link>
            <Link to="/view_all" className={styles.GridItem5}>View All</Link>
          </div>
        </div>
        </section>
    
      )
}