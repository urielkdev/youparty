import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { PlayerProps } from '../util/types'

const Player: React.FC<PlayerProps> = ({ url }) => {
  return (

    <ReactPlayer
      width={'100%'}
      height={'100%'}
      url={url}
      controls={true}
    // playing={playing}
    // onPlay={() => setPlaying(true)}
    // onPause={() => setPlaying(false)}
    // onProgress={value => {
    //   setPlayedSeconds1(value.playedSeconds)

    //   const timeDifference = playedSeconds1 > playedSeconds2 ? playedSeconds1 - playedSeconds2 : playedSeconds2 - playedSeconds1

    //   if (timeDifference > 4)
    //     player2.current?.seekTo(value.playedSeconds)
    // }}
    />
  )
}

export default Player