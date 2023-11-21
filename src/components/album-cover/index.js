import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'


import { AlbumCoverWrapper } from './style'

const AlbumCover = memo((props) => {
  const { name, img, id, artist, size, bgpositiony } = props
  return (
    <AlbumCoverWrapper className='header_icons' size={size} bgpositiony={bgpositiony}>
      <div className='album-image'>
        <img src={getSizeImage(img, parseInt(size))} alt="" />
        {/* {name} */}
        <a className='mask cover_icons' href={`/album?id=${id}`}>{name}</a>
      </div>
      <div className='album-info'>
        <div className="name tohide" title={name}>
          <a href={`/album?id=${id}`}>{name}</a>
        </div>
        <div className="artist tohide" title={artist.name}>
          <a href={`/artist?id=${artist.id}`}> {artist.name}</a>
        </div>
      </div>
    </AlbumCoverWrapper>
  )
})

export default AlbumCover