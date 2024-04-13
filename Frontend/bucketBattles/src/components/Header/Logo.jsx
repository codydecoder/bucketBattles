import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Logo() {

    return (
        <h1 className='text-4xl font-bold border-4 mx-28 border-red-700 rounded-xl bg-red-500 p-4' onClick={() => Navigate("/")}>Bucket Battles</h1>
    )
}