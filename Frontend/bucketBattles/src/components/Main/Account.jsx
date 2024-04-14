// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Account() {

//     return (
//         <div className=''>
//             <h1>account</h1>
            
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../global'

const Account = ({ userData }) => {
  const [picks, setPicks] = useState([])

  useEffect(() => {
    setPicks(userData.picks)
  }, [userData])

  console.log(userData)
  console.log(picks)
  
  return (
    <div className="">
      <h2 id=''>Account</h2>
      <div className="">
        <strong id=''>Name:</strong>
        <span id=''> {userData.username} </span>
      </div>
      <div className="">
        <h3>Picks:</h3>
        <ul>
          {picks.map(pick => (
            <li key={pick._id}>{pick.game}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Account