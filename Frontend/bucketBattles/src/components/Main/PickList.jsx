import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

export default function PickList(){

    const [picks, setPicks] = useState([])
    const [games, setGames] = useState([])
    
    useEffect(() => {
        const getPicks = async () => {
            try{
                const picksResponse = await axios.get(`${BASE_URL}/picks`)
                //console.log(picksResponse.data)
                setPicks(picksResponse.data)

                const gamesResponse = await axios.get(`${BASE_URL}/games`)
                console.log(gamesResponse.data)
                setGames(gamesResponse.data)
                
            } catch (error) {
                console.error("Error fetching picks:", error)
            }
        }
        getPicks()
    }, [])

    const deletePick = async (pickId) => {
        //console.log(pickId)
        try {
            await axios.delete(`${BASE_URL}/picks/${pickId}`)
            console.log('Pick deleted:', pickId)
            setPicks(picks.filter(pick => pick._id !== pickId))
        } catch (error) {
            console.error('Error deleting pick:', error.message)
        }
    }


    if(!picks || !games) {
        return <h1>Loading...</h1>

    } else {
        return (
        <div className="border-2 border-black bg-gray-200 container mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full">
            <h1 className='text-2xl font-bold'>All Picks</h1>
            <ul>
                {picks.map((pick, key) => (
                    
                    <div className="border-2 border-red-600 bg-gray-400 rounded m-1" key={pick._id}>
                            <h3 className='text-xl font-medium'>Picker: <span className='text-base font-normal'>{pick.picker}</span></h3>
                            <h3 className="text-xl font-medium">Game: <span className='text-base font-normal'>{pick.game}</span></h3>
                            <h3 className='text-xl font-medium'>Picked Winner: <span className='text-base font-normal'>{pick.pickedWinner}</span></h3>
                            <button className='border-2 border-red-700 bg-red-500 rounded text-white p-1 m-1' onClick={() => deletePick(pick._id)}>Delete Pick</button>
                    </div>
                ))}
            </ul>
        </div>
    )}

}
