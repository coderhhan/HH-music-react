import React, { memo } from 'react'
import { getCount,getSizeImage } from '../../utils/format-utils'

import SongCoverWrapper from './style'

const SongCover = memo((props) => {

  const {name,img,playCount,id} = props
  
  return (
    <SongCoverWrapper>
      <div className='cover'>
        <img src={getSizeImage(img,140)} alt={name} />
        <a className='mask cover_icons' href={`/paylist?id=${id}`}></a>
        <div className='bottom cover_icons'>
          <i className='icon-headset all_icons'></i>
          <span className='play-count'>{getCount(playCount)}</span>
          <i className='icon-play all_icons'></i>
        </div>
      </div>
      <p className='description'>
        <a href={`/paylist?id=${id}`}>{name}</a>
      </p>

    </SongCoverWrapper>
  )
})

export default SongCover