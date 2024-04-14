import React from 'react'
import GameList from './GameList'
import LoginPage from './LogInPage'


const Main = ({ user }) => {
    //console.log(user)

    if(user === null){
        return (
            <div className='border-2 border-black bg-gray-200 mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full'>
                <LoginPage/>
            </div>
        )
    }
    else if(user != null){
        return (
            <GameList/>
        )
    }
}

export default Main 

