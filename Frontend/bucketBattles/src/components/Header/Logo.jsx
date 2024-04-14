import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
    const navigate = useNavigate()
    return (
        <h1 className='flex-shrink text-4xl font-bold border-4 mx-28 border-red-700 rounded-xl bg-red-500 p-4' onClick={() => navigate("/")}>Bucket Battles</h1>
    )
}