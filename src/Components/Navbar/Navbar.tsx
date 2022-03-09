import React from "react";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavBar from "./MobileNavbar/MobileNavbar";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.main_navbar_container}>
      <DesktopNavbar />
      <MobileNavBar />
    </header>
  );
}
