const Pick = require('../models/pick')

const getAllPicks = async (req, res) => {
    try {
        const picks = await Pick.find()
        res.json(picks)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getPickById = async (req, res) => {
    try {
        const {id} = req.params
        const pick = await Pick.findById(id)
        if(pick) {
            return res.json(pick)
        }
        return res.status(404).send('Pick with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPick = async (req, res) => {
    try {
        const pick = await new Pick(req.body)
        await pick.save()
        return res.status(201).json({
            pick,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updatePick = async (req, res) => {
    try {
        let {id} = req.params
        let pick = await Pick.findByIdAndUpdate(id, req.body, {new: true})
        if (pick) {
            return res.status(200).json(pick)
        }
        throw new Error("Pick not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deletePick = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Pick.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Pick Deleted")
        }
        throw new Error("Pick not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPicks,
    getPickById,
    createPick,
    updatePick,
    deletePick
}
