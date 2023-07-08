import React, { memo } from 'react'
import { NewAlbumWrapper } from './style'
import  HeaderWrapperRCM from '@/components/theme-header-recommend'

const NewAlbum = memo(() => {
  return (
    <NewAlbumWrapper>
       <HeaderWrapperRCM 
        moreLink="/discover/songs"
        title='新碟上架'
        />
    </NewAlbumWrapper>
  )
})

export default NewAlbum