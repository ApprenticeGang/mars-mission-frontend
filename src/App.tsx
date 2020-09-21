import React, {FunctionComponent} from "react";
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

                    <Route path="/timeline/:roverName">
                        {<TimelineId />}
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route excat path="/view_all">
                       <AllImages/> 


                    </Route>
                </Switch>
        </Router>
    );
}

