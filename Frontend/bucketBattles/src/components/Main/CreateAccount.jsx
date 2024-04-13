import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../global'

const CreateAccount = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${BASE_URL}/users`, { username, password })
      navigate('/login')
    } catch (error) {
      console.error('Error creating account:', error.message)
    }
  }

  return (
    <div className='border-2 border-black bg-gray-200 mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full'>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount