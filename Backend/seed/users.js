const db = require('../db')
const User = require('../models/user')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            username: `coderdecoder`,
            password: 'RIPbean',
            picks: [
                
            ],
            experience: 10000,
            score: 100
        },
        {
            username: 'timmyDunkin',
            password: '2014Spurs',
            picks: [
                
            ],
            experience: 1158,
            score: 86
        },
        {
            username: 'PoppaGregg',
            password: 'Spurs4lyfe',
            picks: [
                
            ],
            experience: 2100,
            score: 99
        },
        {
            username: 'victorFromFrance',
            password: 'Spurs2024',
            picks: [
                
            ],
            experience: 53,
            score: 36
        },
        {
            username: 'manuBatman',
            password: 'Argentina',
            picks: [
                
            ],
            experience: 1057,
            score: 82
        }
    ]

    await User.insertMany(users)
    console.log("Created some users!")
}
const run = async () => {
    await main()
    db.close()
}

run()