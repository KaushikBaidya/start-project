import React, { useState } from 'react'
import Card from '../UI/Card'

import classes from './addUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState('')
  const [enteredUserAge, setUserAge] = useState('')

  const addUserHandler = (e) => {
    e.preventDefault()
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return
    }
    if (+enteredUserAge < 1) {
      return
    }
    console.log(enteredUsername, enteredUserAge)
    setUserAge('')
    setUsername('')
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handleUserAgeChange = (e) => {
    setUserAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="username"
          type="number"
          value={enteredUserAge}
          onChange={handleUserAgeChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
