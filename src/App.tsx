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
                   <Route exact path="/">
                       <Link to="/rover_explorer" className= {styles.marsbutton}> ENTER MARS</Link>
                       <Mars />
                   </Route>
                       <Route exact path="/view_all">
                          <ImageViewer/> 
                       </Route>
               </Switch>
               </div> 
           </Router>
       );
   }
   
