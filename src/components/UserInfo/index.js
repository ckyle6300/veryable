import React, { useState } from 'react';
import moment from 'moment'
import styles from './userInfo.module.css'
import ExpandLess from '../../icons/ExpandLess';
import ExpandMore from '../../icons/ExpandMore';
import User from '../../icons/User';

const roleColor = { Administrator: "#2081C3", User: "#68AAAB", Viewer: "#7E7E7E" }

const UserInfo = ({ info }) => {
  console.log(info)
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(prev => !prev);
  }

  // https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };

    return null
  };


  return (
    <div className={styles.outline} id={isClosed ? "" : styles.openOutline}>
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
        <div className={styles.expand} onClick={handleClick}>
          {isClosed ?
            <ExpandMore className={styles.expandLogo} color={"#7E7E7E"} /> :
            <ExpandLess className={styles.expandLogo} color={"#7E7E7E"} />
          }
        </div>
      </div>
      <div className={isClosed ? styles.hidden : styles.lowerDiv}>
        <p className={styles.extInfoTitle}>Address</p>
        <p className={styles.extInfo}>{`${info.street}, ${info.city}, ${info.state} ${info.zip}`}</p>
        <p className={styles.extInfoTitle}>Phone</p>
        <p className={styles.extInfo}>{formatPhoneNumber(info.phone)}</p>
        <p className={styles.extInfoTitle}>Created At</p>
        <p className={styles.extInfo}>{" "}{moment(info.createdAt).format("L h:mm a")}{" "}</p>
        <p className={styles.extInfoTitle}>Last Logged In</p>
        <p className={styles.extInfo}>{" "}{moment(info.lastLoggedIn).format("L h:mm a")}{" "}</p>
      </div>
    </div >
  )
}

export default UserInfo;