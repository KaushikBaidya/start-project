import React, { useState } from 'react'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

import classes from './addUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState('')
  const [enteredUserAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter a valid Input.',
      })
      return
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please Enter a valid age (> 0).',
      })
      return
    }
    props.onAddUser(enteredUsername, enteredUserAge)
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
  const errorhandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorhandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={handleUsernameChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="username"
            type="number"
            value={enteredUserAge}
            onChange={handleUserAgeChange}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
