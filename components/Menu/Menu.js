import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

const Menu = ({ navOpen, ...props }) => {
  const isHidden = navOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu navOpen={navOpen} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        About us
      </Link>
      <Link to="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">💸</span>
        Pricing
      </Link>
      <Link to="/" tabIndex={tabIndex} className={styles.text}>
        <span aria-hidden="true">📩</span>
        Contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
