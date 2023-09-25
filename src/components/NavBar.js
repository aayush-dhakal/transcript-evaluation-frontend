import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../../styles/Layout.module.scss";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className={`customNavbar ${styles.navBar}`}
    >
      <Container fluid>
        <div className={styles.navLogo}>
          <Image
            src="/nav-logo.webp"
            alt="about-us-1"
            width="80rem"
            height="60rem"
          />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <span className={styles.customNavLink}>
                <a>HOME</a>
              </span>
            </Link>
            <Link href="/services">
              <span className={styles.customNavLink}>
                <a>SERVICES</a>
              </span>
            </Link>
            <Link href="/">
              <span className={styles.customNavLink}>
                <a>CONSULTING</a>
              </span>
            </Link>
            <Link href="/contact">
              <span className={styles.customNavLink}>
                <a>CONTACT US</a>
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
