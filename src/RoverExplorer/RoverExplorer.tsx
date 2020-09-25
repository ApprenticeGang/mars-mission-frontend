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
            <Link to="/timeline/opportunity" className={styles.GridItem2}>Opportunity</Link>
            <Link to="/timeline/spirit" className={styles.GridItem3}>Spirit</Link>
            <Link to="/timeline/curiosity" className={styles.GridItem4}>Curiosity</Link>
          </div>
        </div>
        </section>
    
      )
}