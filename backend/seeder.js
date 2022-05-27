import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import fakeChannels from './data/fakeChannels.js'
import users from './data/user.js'
import Stations from './models/stationsModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Stations.deleteMany()
    // await User.insertMany(users)
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id
    const sampleStations = fakeChannels.map((station) => {
      return { ...station, user: adminUser }
    })
    await Stations.insertMany(sampleStations)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Stations.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
