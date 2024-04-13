const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Pick = new Schema(
    {
        picker: {type: Schema.Types.ObjectId, ref: 'user_id'},
        game: {type: Schema.Types.ObjectId, ref: 'game_id'},
        pickedWinner: {type: Schema.Types.ObjectId, ref: 'team_id'}
    },
    {timestamps: true}
)

module.exports = mongoose.model('picks', Pick)
