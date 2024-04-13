import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

export default function GameList(){

    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/games`)
                console.log(response.data)
                setGames(response.data)
            } catch (error) {
                console.error("Error fetching games:", error)
            }
        }
        getGames()
    }, [])


    if(!games) {
        return <h1>Loading...</h1>

    } else {
        return (
        <div className="border-2 border-black bg-gray-200 mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full">
            <h1 className='text-2xl font-bold'>All Games</h1>
            <ul>
                {games.map((game, key) => (
                    <div className="" key={game._id}>
                            <h3 className="text-lg">Game: <span className='text-sm'>{game.homeTeam.name} vs {game.awayTeam.name}</span></h3>
                            <h3 className='text-lg'>Winner: <span className='text-sm'>{game.winningTeam ? game.winningTeam.name : 'TBD'}</span></h3>
                    </div>
                ))}
            </ul>
        </div>
    )}

}

