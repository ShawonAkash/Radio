import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import stationRoutes from './routes/stationRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Api is running')
})
app.use('/channels', stationRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on ${PORT}`.yellow.bold))
