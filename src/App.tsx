import { Mars } from './InteractiveMars/Mars';
import styles from './App.module.scss';
import React, { FunctionComponent, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { RoverExplorer } from "./RoverExplorer/RoverExplorer";
import { TimelineId } from "./TimelineID/TimelineId";
import { ImageViewer } from "./ImageViewer/ImageViewer";
import HamburgerMenu from "./Components/Hamburger/Hamburger";
import Navbar from "./Components/Nav/Nav";
import { Home } from './Homepage/Homepage';


export const App: FunctionComponent = () => {
 const [menuOpen, setMenuOpen] = useState(false);

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
                <Route exact path ="/view-all">
                        {<ImageViewer />}
                    </Route>
                    <Route exact path="/rover_explorer">
                        <RoverExplorer />
                    </Route>
                    <Route exact path="/timeline/:id">
                        {<TimelineId />}
                    </Route>
                    <Route exact path ="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>

     
     
    );
}
