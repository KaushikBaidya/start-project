import React from 'react'
import Card from '../UI/Card'

import classes from './userList.module.css'

const UserList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.user.map((user) => (
          <li>
            {user.name} ({user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
