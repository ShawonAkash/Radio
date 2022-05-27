import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Stations from '../models/stationsModel.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const stations = await Stations.find({})

    res.json(stations)
  })
)
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const station = await Stations.findById(req.params.id)
    if (station) {
      res.json(station)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
    res.json(station)
  })
)

export default router
