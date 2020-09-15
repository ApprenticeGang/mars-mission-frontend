import React from "react";
import styles from './RoverExplorer.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from "semantic-ui-react";


export function RoverExplorer () {
    return (
    <section>
    <div className ={styles.Body}>
    <header className= {styles.Header}><div className ={styles.HeaderText}>Rover Explorer</div></header>
    <div className={styles.GridContainer}>
      <Button as={Link} to="/timeline/perserverance" className={styles.GridItem1}>perserverance</Button>
      <div className={styles.GridItem2}>2</div>
      <div className={styles.GridItem3}>3</div>  
      <div className={styles.GridItem4}>4</div>
      <div className={styles.GridItem5}>5</div>
      </div>
    </div>
    </section>    
    )    
    }