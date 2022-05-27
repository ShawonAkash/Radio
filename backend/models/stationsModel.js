import mongoose from 'mongoose'

const stationsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  freq: {
    type: Number,
    required: true,
  },
})

const Stations = mongoose.model('Stations', stationsSchema)

export default Stations
