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
      <Button as={Link} to="/timeline/perserverance" className={styles.GridItem1}>Perserverance</Button>
      <Button as={Link} to="/timeline/oppertunity"className={styles.GridItem2}>Oppertunity</Button>
      <Button as={Link} to="/timeline/spirit"className={styles.GridItem3}>Spirit</Button>  
      <Button as={Link} to="/timeline/curiosity"className={styles.GridItem4}>Curiosity</Button>
      <Button as={Link} to="/view_all"className={styles.GridItem5}>View All</Button>
      </div>
    </div>
    </section>    
    )    
    }