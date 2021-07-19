import React from 'react';
import styles from './header.module.css'
import Group from '../../icons/Group';

const Header = () => {
  const logoClr = "#00BFFF";
  return (
    <div id={styles.outerDiv}>
      <div id={styles.imgDiv}><Group color={logoClr} className={styles.logo} /></div>
      <div id={styles.titleDiv}><h1 className={styles.title}>USERS</h1></div>
    </div>
  )
}

export default Header;