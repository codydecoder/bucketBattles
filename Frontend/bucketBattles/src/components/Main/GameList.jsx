import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

export default function GameList(){

    const [games, setGames] = useState([])

    const addGameToPickListHome = async (game) => {
        //console.log(game)
        try {
            const response = await axios.post(`${BASE_URL}/picks`, { game: game._id, pickedWinner: game.homeTeam._id })
            console.log('Game added to pick list:', response.data)
        } catch (error) {
            console.error('Error adding game to pick list:', error.message)
        }
    }

    const addGameToPickListAway = async (game) => {
        //console.log(game)
        try {
            const response = await axios.post(`${BASE_URL}/picks`, { game: game._id, pickedWinner: game.awayTeam._id })
            console.log('Game added to pick list:', response.data)
        } catch (error) {
            console.error('Error adding game to pick list:', error.message)
        }
    }
    
    useEffect(() => {
        const getGames = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/games`)
                //console.log(response.data)
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
        <div className="border-2 border-black bg-gray-200 container mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full">
            <h1 className='text-2xl font-bold'>All Games</h1>
            <ul>
                {games.map((game, key) => (
                    <div className="border-2 border-red-600 bg-gray-400 rounded m-1" key={game._id}>
                            <h3 className="text-xl font-medium">Game: <span className='text-base font-normal'>{game.homeTeam.name} vs {game.awayTeam.name}</span></h3>
                            <h3 className='text-xl font-medium'>Winner: <span className='text-base font-normal'>{game.winningTeam ? game.winningTeam.name : 'TBD'}</span></h3>
                            <button className='border-2 border-red-700 bg-red-500 rounded text-white p-1 m-1' onClick={() => addGameToPickListHome(game)}>Pick {game.homeTeam.name}</button>
                            <button className='border-2 border-red-700 bg-red-500 rounded text-white p-1 m-1' onClick={() => addGameToPickListAway(game)}>Pick {game.awayTeam.name}</button>
                    </div>
                ))}
            </ul>
        </div>
    )}

}

