import React, { memo } from 'react'

import PlayerWrapper from './style'
import SongInfo from './child-cpns/songInfo'
import Comment from './child-cpns/comment'

const Player = memo((props) => {

  return (
    <PlayerWrapper>
      <div className='wrap-v2 song-detail-bg_sprite'>
        <div className='left-content'>
          <SongInfo />
          <Comment />
        </div>
        <div className='right-content'>

        </div>
      </div>
    </PlayerWrapper>
  )
})

export default Player