import React, { memo } from 'react'
import { useEffect } from 'react'
import HotRecommend from './child-components/hot-recommend'
import NewAlbum from './child-components/new-album'
import RankingList from './child-components/ranking-list'
import TopBanner from './child-components/top-banner'
import {RecommendWrapper,Content,RightWrapper,LeftWrapper} from './style'

const Recommend = memo((props) => {
  useEffect(()=>{
    console.log(count)
  },[count])


  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className='wrap-v2'>
        <LeftWrapper>
          <HotRecommend></HotRecommend>
          <div className='space-room'></div>
          <NewAlbum />
          <RankingList />
        </LeftWrapper>
        <RightWrapper>
        </RightWrapper>      
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend