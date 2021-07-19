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
            <div key={info.phone}>
              <UserInfo info={info} />
            </div>
          )
        })
      }
    </div>
  )
}

export default UserList;