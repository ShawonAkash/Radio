import React, { Component } from 'react'
import axios from 'axios'
import RadioHeader from '../radioHeader/RadioHeader'
import RadioBody from '../radioBody/RadioBody'
import RadioFooter from '../radioFooter/RadioFooter'

class Radio extends Component {
  state = {
    channelList: [],
    selectedChannel: null,
  }

  componentDidMount() {
    const fetchChannels = async () => {
      const { data } = await axios.get('/channels')
      this.setState({ channelList: data })
    }
    fetchChannels()
  }

  handleSelectChannel = (channel) => {
    this.setState({ selectedChannel: channel })
  }
  render() {
    const { channelList, selectedChannel } = this.state
    return (
      <div className='bg-[#2b2b36] w-[695px] h-[1010px] mx-auto rounded-[50px] overflow-hidden flex flex-col justify-between drop-shadow-2xl '>
        <RadioHeader />
        <RadioBody
          channelList={channelList}
          selectedChannel={selectedChannel}
          onSelectChannel={this.handleSelectChannel}
        />
        <RadioFooter selectedChannel={selectedChannel} />
      </div>
    )
  }
}

export default Radio
