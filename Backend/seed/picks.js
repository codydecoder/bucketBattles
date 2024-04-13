const db = require('../db')
const Pick = require('../models/pick')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const picks = [
        {
            picker: '661afd8b29e0285261bce7c8',
            game: '661afd85c398784f8900bddc',
            pickedWinner: '661afd8177277d4d22051f69'
        },

    ]

    await Pick.insertMany(picks)
    console.log("Created some picks!")
}
const run = async () => {
    await main()
    db.close()
}

run()