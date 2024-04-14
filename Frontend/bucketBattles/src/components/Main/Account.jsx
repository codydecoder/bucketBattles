import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../global'

const Account = ({ userData }) => {
  const [picks, setPicks] = useState([])

  useEffect(() => {
    setPicks(userData.picks)
  }, [userData])

  //console.log(userData)
  //console.log(picks)
  
  return (
    <div className='border-2 border-black bg-gray-200 container mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full'>
      <h2 className='text-2xl font-bold'>Account</h2>
      <div className="">
        <strong className='text-lg font-medium'>Username:</strong>
        <span className='text-base font-normal'> {userData.username} </span>
      </div>
      <div className="">
        <h3 className='text-lg font-medium'>Picks:</h3>
        <ul>
          {picks.map(pick => (
            <li className='text-base font-normal' key={pick._id}>{pick.game}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Account