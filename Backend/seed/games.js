const db = require('../db')
const Game = require('../models/game')
const Team = require('../models/team')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    const Celtics = await Team.findOne({name: 'Boston Celtics'})
    const Bucks = await Team.findOne({name: 'Milwaukee Bucks'})
    const Cavs = await Team.findOne({name: 'Cleveland Cavaliers'})
    const Magic = await Team.findOne({name: 'Orlando Magic'})
    const Knicks = await Team.findOne({name: 'New York Knicks'})
    const Heat = await Team.findOne({name: 'Miami Heat'})
    const Pacers = await Team.findOne({name: 'Indiana Pacers'})
    const Sixers = await Team.findOne({name: 'Philadelphia 76ers'})
    const Bulls = await Team.findOne({name: 'Chicago Bulls'})
    const Hawks = await Team.findOne({name: 'Atlanta Hawks'})
    const Nets = await Team.findOne({name: 'Brooklyn Nets'})
    const Raptors = await Team.findOne({name: 'Toronto Raptors'})
    const Hornets = await Team.findOne({name: 'Charlotte Hornets'})
    const Wizards = await Team.findOne({name: 'Washington Wizards'})
    const Pistons = await Team.findOne({name: 'Detroit Pistons'})
    const Timberwolves = await Team.findOne({name: 'Minnesota Timberwolves'})
    const Nuggets = await Team.findOne({name: 'Denver Nuggets'})
    const Thunder = await Team.findOne({name: 'Oklahoma City Thunder'})
    const Clippers = await Team.findOne({name: 'LA Clippers'})
    const Mavericks = await Team.findOne({name: 'Dallas Mavericks'})
    const Suns = await Team.findOne({name: 'Phoenix Suns'})
    const Pelicans = await Team.findOne({name: 'New Orleans Pelicans'})
    const Kings = await Team.findOne({name: 'Sacramento Kings'})
    const Lakers = await Team.findOne({name: 'Los Angeles Lakers'})
    const Warriors = await Team.findOne({name: 'Golden State Warriors'})
    const Rockets = await Team.findOne({name: 'Houston Rockets'})
    const Jazz = await Team.findOne({name: 'Utah Jazz'})
    const Grizzlies = await Team.findOne({name: 'Memphis Grizzlies'})
    const Blazers = await Team.findOne({name: 'Portland Trail Blazers'})
    const Spurs = await Team.findOne({name: 'San Antonio Spurs'})


    const games = [
        // 4/10/2024
        {
            homeTeam: Cavs._id,
            awayTeam: Grizzlies._id,
            winningTeam: Cavs._id
        },
        {
            homeTeam: Heat._id,
            awayTeam: Mavericks._id,
            winningTeam: Mavericks._id
        },
        {
            homeTeam: Thunder._id,
            awayTeam: Spurs._id,
            winningTeam: Thunder._id
        },
        // 4/11/2024
        {
            homeTeam: Pistons._id,
            awayTeam: Bulls._id,
            winningTeam: null
        },
        {
            homeTeam: Celtics._id,
            awayTeam: Knicks._id,
            winningTeam: null
        },
        {
            homeTeam: Jazz._id,
            awayTeam: Rockets._id,
            winningTeam: null
        },
        {
            homeTeam: Blazers._id,
            awayTeam: Warriors._id,
            winningTeam: null
        },
        {
            homeTeam: Kings._id,
            awayTeam: Pelicans._id,
            winningTeam: null
        },
        // 4/12/2024
        {
            homeTeam: Sixers._id,
            awayTeam: Magic._id,
            winningTeam: null
        },
        {
            homeTeam: Wizards._id,
            awayTeam: Bulls._id,
            winningTeam: null
        },
        {
            homeTeam: Spurs._id,
            awayTeam: Nuggets._id,
            winningTeam: null
        },
    ]

    await Game.insertMany(games)
    console.log("Created some games!")
}
const run = async () => {
    await main()
    db.close()
}

run()