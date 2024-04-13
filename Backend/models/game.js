const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Game = new Schema(
    {
        homeTeam: {type: Schema.Types.ObjectId, ref: 'teams'},
        awayTeam: {type: Schema.Types.ObjectId, ref: 'teams'},
        winningTeam: {type: Schema.Types.ObjectId, ref: 'teams', default: null}
    },
    {timestamps: true}
)

module.exports = mongoose.model('games', Game)
