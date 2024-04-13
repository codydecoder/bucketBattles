const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Team = new Schema(
    {
        name: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('teams', Team)
