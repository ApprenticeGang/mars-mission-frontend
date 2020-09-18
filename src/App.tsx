import React, { FunctionComponent, useState } from "react";
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./Homepage/Homepage";
import { RoverExplorer } from "./RoverExplorer/RoverExplorer";
import { TimelineId } from "./TimelineID/TimelineId";
import HamburgerMenu from "./Components/Hamburger/Hamburger";
import Navbar from "./Components/Nav/Nav";
import {AllImages} from "./ViewAllImages/AllImages";


export const App: FunctionComponent = () => {
 const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <Router>
            <Navbar />
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div onClick={() => {setMenuOpen(false)}} data-testid= "Clear nav">
            <Switch>
                <Route path="/rover_explorer">
                    <RoverExplorer />
                </Route>
                <Route path="/timeline/:id">
                    {<TimelineId />}
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route excat path="/view_all">
                       <AllImages/> 
                    </Route>
            </Switch>
            </div> 
        </Router>
    );
}

