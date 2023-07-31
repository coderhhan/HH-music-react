import React, { memo } from 'react'
import PanelHeaderWrapper from './style'
import {useSelector,shallowEqual} from 'react-redux'

const PanelHeader = memo(() => {

  const {currentSong,playList} = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong']),
      playList:state.getIn(['player','playList']),
    }
  },shallowEqual)

  return (
    <PanelHeaderWrapper className='palylist-header playlist_bg_sprite'>
      <div className='header-left'>
        <span>播放列表（{playList.length}）</span>
        <span>
        <a href="#">收藏全部</a>
        <span className='line'></span>
        <a href="#">清除</a>
        </span>
      </div>
      <div className='header-right'>
        {currentSong.name}
      </div>
    </PanelHeaderWrapper>
  )
})

export default PanelHeader