import React from "react";
import Link from "next/link";
import * as data from "./links.json";
import styles from "../../styles/Navbar.module.css";
import Placeholder from "../Placeholder";

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type Link = {
  prefix: string;
  label: string;
  href: string;
  id: string;
};

const Navbar: React.FC<{}> = () => {
  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.logo}>
          <Placeholder />
        </div>
        <div className={styles.navbarArea}>
          <ul className={styles.className}>
            {links.map((link: Link) => (
              <li key={link.id}><a href={link.href}>{link.prefix}
                {link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
