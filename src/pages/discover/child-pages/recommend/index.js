import React, { memo } from 'react'
import HotRecommend from './child-components/hot-recommend'
import NewAlbum from './child-components/new-album'
import RankingList from './child-components/ranking-list'
import TopBanner from './child-components/top-banner'
import {RecommendWrapper,Content,RightWrapper,LeftWrapper} from './style'

const Recommend = memo((props) => {
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
          you
        </RightWrapper>      
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend