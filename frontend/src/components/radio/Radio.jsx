import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RadioHeader from '../radioHeader/RadioHeader'
import RadioBody from '../radioBody/RadioBody'
import RadioFooter from '../radioFooter/RadioFooter'
import { listStations } from './../../actions/stationActions'

const Radio = () => {
  const [selectedStation, setSelectedStation] = useState('')
  const dispatch = useDispatch()

  const stationList = useSelector((state) => state.stationList)
  const { loading, error, stations } = stationList

  useEffect(() => {
    dispatch(listStations())
  }, [dispatch])

  const handleSelectChannel = (station) => {
    setSelectedStation(station)
  }

  return (
    <div className='bg-[#2b2b36] w-[695px] h-[1010px] mx-auto rounded-[50px] overflow-hidden flex flex-col justify-between drop-shadow-2xl '>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <>
          <RadioHeader />
          <RadioBody
            stations={stations}
            selectedChannel={selectedStation}
            onSelectChannel={handleSelectChannel}
          />
          <RadioFooter selectedChannel={selectedStation} />
        </>
      )}
    </div>
  )
}

export default Radio
