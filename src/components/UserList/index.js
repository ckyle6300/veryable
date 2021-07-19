import React from 'react';
import styles from './userList.module.css'
import usersData from '../../users.json'
import UserInfo from '../UserInfo';

const UserList = () => {

  return (
    <div className={styles.outerDiv}>
      {
        usersData.map(info => {
          return (
            <UserInfo key={info.phone} info={info} />
          )
        })
      }
    </div>
  )
}

export default UserList;