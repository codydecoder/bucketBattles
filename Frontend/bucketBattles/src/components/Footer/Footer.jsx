import React from 'react'
import GitHubProfile from './GitHubProfile'
import GitHubProject from './GitHubProject'

export default function Footer () {
    
    return (
        <footer className='container mx-auto border-2 border-black bg-gray-400 p-2 space-x-4 '>
            <GitHubProfile/>
            <GitHubProject/>
        </footer>
    )
}
