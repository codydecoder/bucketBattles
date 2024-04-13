const db = require('../db')
const Team = require('../models/team')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const teams = [
        {
            name: 'Boston Celtics',
        },
        {
            name: 'Milwaukee Bucks',
        },
        {
            name: 'Cleveland Cavaliers'
        },
        {
            name: 'Orlando Magic'
        },
        {
            name: 'New York Knicks'
        },
        {
            name: 'Miami Heat'
        },
        {
            name: 'Indiana Pacers'
        },
        {
            name: 'Philadelphia 76ers'
        },
        {
            name: 'Chicago Bulls'
        },
        {
            name: 'Atlanta Hawks'
        },
        {
            name: 'Brooklyn Nets'
        },
        {
            name: 'Toronto Raptors'
        },
        {
            name: 'Charlotte Hornets'
        },
        {
            name: 'Washington Wizards'
        },
        {
            name: 'Detroit Pistons'
        },
        {
            name: 'Minnesota Timberwolves'
        },
        {
            name: 'Denver Nuggets'
        },
        {
            name: 'Oklahoma City Thunder'
        },
        {
            name: 'LA Clippers'
        },
        {
            name: 'Dallas Mavericks'
        },
        {
            name: 'Phoenix Suns'
        },
        {
            name: 'New Orleans Pelicans'
        },
        {
            name: 'Sacramento Kings'
        },
        {
            name: 'Los Angeles Lakers'
        },
        {
            name: 'Golden State Warriors'
        },
        {
            name: 'Houston Rockets'
        },
        {
            name: 'Utah Jazz'
        },
        {
            name: 'Memphis Grizzlies'
        },
        {
            name: 'Portland Trail Blazers'
        },
        {
            name: 'San Antonio Spurs'
        }
    ]

    await Team.insertMany(teams)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()