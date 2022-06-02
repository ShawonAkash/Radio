import express from 'express'
const router = express.Router()
import {
  getStations,
  getStationById,
} from '../controllers/stationController.js'

router.route('/').get(getStations)
router.route('/:id').get(getStationById)

export default router
