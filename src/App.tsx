import React, { FunctionComponent, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { RoverExplorer } from "./RoverExplorer/RoverExplorer";
import { TimelineId } from "./TimelineID/TimelineId";
import HamburgerMenu from "./Components/Hamburger/Hamburger";
import Navbar from "./Components/Nav/Nav";
import {AllImages} from "./ViewAllImages/AllImages";
import { Home } from './Homepage/Homepage';


export const App: FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <Router>
            <Navbar />
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div onClick={(): void => {setMenuOpen(false)}} data-testid= "Clear nav">
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
                <Route exact path="/view_all">
                    <AllImages/> 
                </Route>
            </Switch>
            </div> 
        </Router>
    );
}

