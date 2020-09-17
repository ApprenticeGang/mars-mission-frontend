import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../Hamburger/Hamburger"
import HamburgerMenu from "../Hamburger/Hamburger";

const useOutsideAlerter = (ref: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert('You clicked outside')
    }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
  
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export const OutsideAlerter = (props: any) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;
