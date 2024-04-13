import React from 'react'
import LogIn from './LogIn'
import Logo from './Logo'
import Nav from './Nav'

const Header = ({ user }) => {
    return (
        <header className="container mx-auto border-2 border-black bg-gray-400 p-2">
            <LogIn/>
            <Logo/>
            <Nav/>
        </header>
    )
}

export default Header 

