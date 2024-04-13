import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = ({ onLogin, onLogout }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(username, password)
    navigate('/')
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className='border-2 border-black bg-gray-200 container mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full'>
      <div className='m-1 text-2xl font-bold'>Login Page</div>
      <form className='' onSubmit={handleSubmit}>
        <input
          className='m-1 border-4 border-gray-400 rounded'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className='m-1 border-4 border-gray-400 rounded'
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='bg-red-500 text-black font-bold p-1 px-2 border-2 border-red-700 rounded m-1' type="submit">Login Now</button>
      </form>
      <button className='bg-red-500 text-black font-bold p-1 px-2 border-2 border-red-700 rounded m-1' onClick={handleLogout}>Logout</button>
      <button className='bg-red-500 text-black font-bold p-1 px-2 border-2 border-red-700 rounded m-1' onClick={() => navigate('/createAccount')}>Create Account</button>
    </div>
  )
}

export default LoginPage
