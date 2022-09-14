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
      
<div className={styles.navTop}> 
        <div className={styles.logo}>
          <Placeholder />
      </div>
      </div>

<nav className={styles.navbarWrapper}>
        <div className={styles.navbarArea}>
          <ul className={styles.navigation}>
            {links.map((link: Link) => (
              <li className={styles.navigationLink} key={link.id}><a href={link.href}>{link.prefix}
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
