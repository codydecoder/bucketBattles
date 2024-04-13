const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Game = new Schema(
    {
        homeTeam: {type: Schema.Types.ObjectId, ref: 'team_id'},
        awayTeam: {type: Schema.Types.ObjectId, ref: 'team_id'},
        winningTeam: {type: Schema.Types.ObjectId, ref: 'team_id', default: null}
    },
    {timestamps: true}
)

module.exports = mongoose.model('games', Game)
