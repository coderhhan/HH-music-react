import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { getSizeImage } from '../../utils/format-utils'
import { getSongDetailAction } from './store/actionCreators'


import PlayerWrapper from './style'

const Player = memo(() => {
  const {currentSong } = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong'])
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(getSongDetailAction(167876))
  },[dispatch])

  return (
    <PlayerWrapper>
      <div className='wrap-v2 song-detail-bg_sprite'>
        <div className='left-content'>
          <div className='song-info'>
            <div className='img-wrap'>
              <img src={getSizeImage(currentSong.al &&currentSong.al.picUrl,130)} alt="" />
              <span className='song-mask cover_icons'></span>
            </div>
            <div className='song-detai'> 
              <div className='song-name'><i className='song-icon opreation_icons'></i>爱情转移·2023</div>
              <p className='row'>歌手：<a href="#">刘大拿 / SipSu小口酥</a></p>
              <p className='row'>所属专辑：<a href="#">爱情转移·2023</a></p>
              <div className='song-operation'>
                <a href="#" className='button2_sprite paly-btn'>
                  <i  className='button2_sprite'>
                    <em className='button2_sprite'/>
                    <span>播放</span>
                  </i>
                </a>
                <a href="#" title='添加到播放列表' className='button2_sprite add-list'></a>
                <a href="#" className='button2_sprite btn-icon collect-icon'><i className='button2_sprite'>收藏</i></a>
                <a href="#" className='button2_sprite btn-icon shared-icon'><i className='button2_sprite'>分享</i></a>
                <a href="#" className='button2_sprite btn-icon downlod-icon'><i className='button2_sprite'>下载</i></a>
                <a href="#" className='button2_sprite btn-icon comment-icon'><i className='button2_sprite'>(2222)</i></a>
              </div>
              <div></div>
            </div>
          </div>
          <div className='comment-box'>
            评论
          </div>
        </div>
        <div className='right-content'>

        </div>
      </div>
    </PlayerWrapper>
  )
})

export default Player