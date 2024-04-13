const db = require('../db')
const Pick = require('../models/pick')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const picks = [
        
    ]

    await Pick.insertMany(picks)
    console.log("Created some picks!")
}
const run = async () => {
    await main()
    db.close()
}

run()