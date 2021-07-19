import React from 'react';
import styles from './userInfo.module.css'
import ExpandLess from '../../icons/ExpandLess';
import ExpandMore from '../../icons/ExpandMore';
import User from '../../icons/User';

const roleColor = { Administrator: "#2081C3", User: "#68AAAB", Viewer: "#7E7E7E" }

const UserInfo = ({ info }) => {
  console.log(info)



  return (
    <div className={styles.outline}>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <div className={styles.imgDiv}>
            <User color={roleColor[info.role]} className={styles.userImg} />
          </div>
          <div className={styles.textInfo}>
            <h2 className={styles.textDec} id={styles.name}>{`${info.firstName} ${info.lastName}`}</h2>
            <h3 className={styles.textDec} id={styles.role}>{info.role}</h3>
            <h4 className={styles.textDec} id={styles.email}>{info.email}</h4>
          </div>
        </div>
        <div className={styles.expand}>
          <ExpandMore className={styles.expandLogo} color={"#7E7E7E"} />
        </div>
      </div>
      <div>

      </div>
    </div >
  )
}

export default UserInfo;