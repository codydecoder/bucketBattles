import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <nav className='space-x-10 mt-3'>
            <Link className="bg-red-700 p-1 font-semibold text-white rounded" to="/account">Account</Link>
            <Link className="bg-red-700 p-1 font-semibold text-white rounded" to="/games">Games</Link>
            <Link className="bg-red-700 p-1 font-semibold text-white rounded" to="/picks">Picks</Link>
        </nav>
    )
}