import React, { memo } from 'react'
import { useSelector,shallowEqual } from 'react-redux'
import PanelHeader from './components/header'
import Lyriclist from './components/lyriclist'
import PlayList from './components/playlist'
import AppPlayerPanelWrapper from './style'

const AppPlayerPanel = memo(() => {

  const {currentSong} = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong']),
    }
  },shallowEqual)

  return (
    <AppPlayerPanelWrapper onClick={(e)=>e.stopPropagation()}>
      <PanelHeader></PanelHeader>
      <div className='palylist-content playlist_bg_sprite'>
         <img src={currentSong.al && currentSong.al.picUrl} alt="" />
         <PlayList />
         <div className='flag-content'></div>
         <Lyriclist />
      </div>

    </AppPlayerPanelWrapper>
  )
})


export default AppPlayerPanel