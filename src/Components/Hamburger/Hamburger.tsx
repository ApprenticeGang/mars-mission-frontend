import React, { useState, createRef, FunctionComponent } from 'react';
import styles from './Hamburger.module.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OutsideAlerter from "../Body/Body";
import { Navbar } from "../Nav/Nav"

interface HamburgerProps {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}
export const HamburgerMenu: FunctionComponent<HamburgerProps> = ({ menuOpen, setMenuOpen }) => {
    //   const [status, setStatus] = useState(styles.close);

    return <div className={menuOpen ? `${styles.hamburgerMenu} ${styles.open}` : styles.hamburgerMenu}>
        <button
            className={styles.BurgerMenu__container}
        onClick={() => setMenuOpen(!menuOpen)}
        >
            <i></i>
            <i></i>
            <i></i>
        </button>
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <NavLink setMenuOpen={setMenuOpen} location="/" text={"Home"}></NavLink>
                <NavLink setMenuOpen={setMenuOpen} location="/rover_explorer" text={"Rover Explorer"}></NavLink>
                <NavLink setMenuOpen={setMenuOpen} location="/timeline/opportunity" text={"Opportunity"}></NavLink>
                <NavLink setMenuOpen={setMenuOpen} location="/timeline/spirit" text={"Spirit"}></NavLink>
                <NavLink setMenuOpen={setMenuOpen} location="/timeline/curiosity" text={"Curiosity"}></NavLink>
                <NavLink setMenuOpen={setMenuOpen} location="/timeline/perserverance" text={"Perserverance"}></NavLink>

            </ul>
        </nav>
    </div>
}

export default HamburgerMenu;

interface LinkProps {
    text: string;
    location: string;
    setMenuOpen: (menuOpen: boolean) => void;
}

const NavLink: FunctionComponent<LinkProps> = ({ setMenuOpen, text, location }) => {

    return (
        <li className={styles.navbarLi} >
            <Link to={location} onClick={() => setMenuOpen(false)} className={styles.navLink}>{text}</Link>
        </li>
    )
}