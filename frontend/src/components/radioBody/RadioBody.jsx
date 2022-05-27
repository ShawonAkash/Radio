import React from 'react'
import minus from '../../asset/minus.png'
import logo from '../../asset/logo.png'
import plus from '../../asset/plus.png'

function RadioBody(props) {
  const { channelList, selectedChannel, onSelectChannel } = props

  function showChannelDetail(channel) {
    if (selectedChannel && selectedChannel === channel) {
      return (
        <td>
          <div className='flex flex-col mt-[40px]'>
            <div className='flex items-center justify-between'>
              <div>
                <img src={minus} />
              </div>
              <div>
                <img src={logo} />
              </div>
              <div>
                <img src={plus} />
              </div>
            </div>
            <div>
              <div className='py-[30px] flex justify-between'>
                <span>{channel.name}</span>
                <span className='font-semibold'>{channel.freq}</span>
              </div>
            </div>
          </div>
        </td>
      )
    } else {
      return (
        <td className='py-[30px] flex justify-between'>
          <span>{channel.name}</span>
          <span className='font-semibold'>{channel.freq}</span>
        </td>
      )
    }
  }

  return (
    <div className='overflow-y-auto text-[60px] pt-[15px]'>
      <table className='w-[630px] mx-auto'>
        <tbody>
          {channelList.map((channel) => {
            return (
              <React.Fragment key={channel.freq}>
                <tr
                  key={channel.freq}
                  onClick={() => onSelectChannel(channel)}
                  className='border-b-[1px] border-b-[#45494d] cursor-pointer'
                >
                  {showChannelDetail(channel)}
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RadioBody
