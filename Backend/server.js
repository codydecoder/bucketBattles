const express = require('express') //express
const logger = require('morgan') //morgan
const bodyParser = require('body-parser')
const db = require('./db') //db
const cors = require('cors') //cors

const userController = require('./controllers/userController')
const teamController = require('./controllers/teamController')
const gameController = require('./controllers/gameController')
const pickController = require('./controllers/pickController')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))

//user controllers
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserByUsername)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)

//team controllers
app.get('/teams', teamController.getAllTeams)
app.get('/teams/:id', teamController.getTeamById)

//game controllers
app.get('/games', gameController.getAllGames)
app.get('/games/:id', gameController.getGameById)

//pick controllers
app.get('/picks', pickController.getAllPicks)
app.get('/picks/:id', pickController.getPickById)
app.post('/picks', pickController.createPick)
app.put('/picks/:id', pickController.updatePick)
app.delete('/picks/:id', pickController.deletePick)

