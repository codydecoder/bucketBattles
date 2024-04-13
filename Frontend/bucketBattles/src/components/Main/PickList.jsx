import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

export default function PickList(){

    const [picks, setPicks] = useState([])
    
    useEffect(() => {
        const getPicks = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/picks`)
                console.log(response.data)
                setPicks(response.data)
            } catch (error) {
                console.error("Error fetching picks:", error)
            }
        }
        getPicks()
    }, [])


    if(!picks) {
        return <h1>Loading...</h1>

    } else {
        return (
        <div className="border-2 border-black bg-gray-200 container mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full">
            <h1 className='text-2xl font-bold'>All Picks</h1>
            <ul>
                {picks.map((pick, key) => (
                    <div className="border-2 border-red-600 bg-gray-400 rounded m-1" key={pick._id}>
                            <h3 className='text-lg'>Picker: <span className='text-sm'>{pick.picker}</span></h3>
                            <h3 className="text-lg">Game: <span className='text-sm'>{pick.game.homeTeam} vs {pick.game.awayTeam}</span></h3>
                            <h3 className='text-lg'>Picked Winner: <span className='text-sm'>{pick.pickedWinner}</span></h3>
                            {/* <button className='border-2 border-red-700 bg-red-500 rounded text-white p-1 m-1' onClick={() => addGameToPickList(pick._id)}>Add Pick</button> */}
                    </div>
                ))}
            </ul>
        </div>
    )}

}

