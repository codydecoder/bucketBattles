const Game = require('../models/game')

const getAllGames = async (req, res) => {
    try {
        const games = await Game.find()
        res.json(games)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getGameById = async (req, res) => {
    try {
        const {id} = req.params
        const game = await Game.findById(id)
        if(game) {
            return res.json(game)
        }
        return res.status(404).send('Game with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createGame = async (req, res) => {
    try {
        const game = await new Game(req.body)
        await game.save()
        return res.status(201).json({
            game,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateGame = async (req, res) => {
    try {
        let {id} = req.params
        let game = await Game.findByIdAndUpdate(id, req.body, {new: true})
        if (game) {
            return res.status(200).json(game)
        }
        throw new Error("Game not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteGame = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Game.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Game Deleted")
        }
        throw new Error("Game not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
}
