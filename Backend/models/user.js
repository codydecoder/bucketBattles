const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const User = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        picks: [{type: Schema.Types.ObjectId, ref: 'pick_id'}],
        experience: {type: Number, required: true},
        score: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('users', User)
