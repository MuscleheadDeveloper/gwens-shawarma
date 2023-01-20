import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import styles from "../../styles/Navbar.module.css";

const Menu = ({ navOpen, ...props }) => {
  const isHidden = navOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu navOpen={navOpen} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">💸</span>
        Pricing
      </a>
      <a href="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">📩</span>
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
