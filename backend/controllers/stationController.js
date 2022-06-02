import asyncHandler from 'express-async-handler'
import Stations from '../models/stationsModel.js'

const getStations = asyncHandler(async (req, res) => {
  const stations = await Stations.find({})

  res.json(stations)
})

const getStationById = asyncHandler(async (req, res) => {
  const station = await Stations.findById(req.params.id)
  if (station) {
    res.json(station)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
  res.json(station)
})

export { getStations, getStationById }
