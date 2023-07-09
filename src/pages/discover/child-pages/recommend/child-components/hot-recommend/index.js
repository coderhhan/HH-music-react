import React, {  memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual } from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT_EIGHT } from '@/common/constants'

import  HeaderWrapperRCM from '@/components/theme-header-recommend'
import { HotRecommendWrapper } from './style'
import SongCover from '@/components/song-cover'



const HotRecommend = memo((props) => {

  const {hotRecommends} = useSelector(state=>{
    return{
      hotRecommends:state.getIn(['recommend','hotRecommends'])
    }
  },shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT_EIGHT))
  },[dispatch])
  
  return (
    <HotRecommendWrapper>
      <HeaderWrapperRCM 
       keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
       moreLink="/discover/songs"
       title='热门推荐'
      />
      <div className='recommend-list'>
      {
        hotRecommends.map(item=>{
          return (
            <SongCover key={item.id} name={item.name} img={item.picUrl} playCount={item.playCount}/>
          )
        })
      }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend