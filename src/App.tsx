import React, { FunctionComponent } from 'react';
import { Mars } from './InteractiveMars/Mars';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./Homepage/Homepage";
import { RoverExplorer } from "./RoverExplorer/RoverExplorer";
import {AllImages} from "./ViewAllImages/AllImages";
import {TimelineId} from "./TimelineID/TimelineId";



export const App: FunctionComponent = () => {
    return (
        <Router>
                <nav>
                    <ul className={styles.navbarUl}>
                        <li className={styles.navbarLi}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.navbarLi}>
                            <Link to="/rover_explorer">Rover explorer</Link>
                        </li>
                        <li className={styles.navbarLi}>
                            <Link to="/timeline/opportunity">Opportunity</Link>
                        </li>
                        <li className={styles.navbarLi}>
                            <Link to="/timeline/spirit">Spirit</Link>
                        </li>
                        <li className={styles.navbarLi}>
                            <Link to="/timeline/curiosity">Curiosity</Link>
                        </li>
                        <li className={styles.navbarLi}>
                            <Link to="/timeline/perserverance">Perserverance</Link>
                        </li>
                    </ul> 
               </nav>

                <Switch>
                    <Route exact path="/rover_explorer">
                        <RoverExplorer />
                    </Route>

                    <Route path="/timeline/:id">
                        {<TimelineId />}
                    </Route>
                    <Route exact path="/">
                      <Link to="/rover_explorer" className= {styles.marsbutton}> ENTER MARS</Link>
                      <Mars />
                    </Route>
                    <Route exact path="/view_all">
                       <AllImages/> 


                    </Route>
                </Switch>
        </Router>
    );
}

