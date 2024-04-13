const mongoose = require('mongoose')
const UserSchema = require('./user')
const TeamSchema = require('./team')
const GameSchema = require('./game')
const PickSchema = require('./pick')

const User = mongoose.model('User', UserSchema)
const Team = mongoose.model('Team', TeamSchema)
const Game = mongoose.model('Game', GameSchema)
const Pick = mongoose.model('Pick', PickSchema)

module.exports = {
    User,
    Team,
    Game,
    Pick
}