import React, { memo } from 'react'
import { RankingListWrapper } from './style'
import  HeaderWrapperRCM from '@/components/theme-header-recommend'

const RankingList = memo(() => {
  return (
    <RankingListWrapper>
       <HeaderWrapperRCM 
        moreLink="/discover/songs"
        title='新碟上架'
        />
    </RankingListWrapper>
  )
})

export default RankingList