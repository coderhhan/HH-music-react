import React, { memo,useCallback,useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {  formatMinuteSecond,getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction,getSongUrlDetailAction } from '../store/actionCreators'

import { Slider } from 'antd';
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import {Control, Operator, PlayerBarWrapper, PlayInfo} from './style'

const AppPlayerBar = memo(() => {

  const audioRef = useRef()
  const [currentTime, setCurrentTime] = useState(0);
  const [progress,setProgress] = useState(0)
  const [duration,setDuration]=useState(0)
  const [isPlaying,setIsPlaying] = useState(false)
  const [isDraging,setDraging] = useState(false)
  const {currentSong,currentSongUrl } = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong']),
      currentSongUrl:state.getIn(['player','currentSongUrl'])
    }
  },shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSongUrlDetailAction({id:2060079395,level:'exhigh'}))
    dispatch(getSongDetailAction(2060079395))
  },[dispatch])

  useEffect(()=>{
    setDuration(currentSong.dt)
  },[currentSong])
  
  //其他逻辑处理
  //播放
  const handleAudioPlay = useCallback((e)=>{
    if(isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
    }else{
      setIsPlaying(true)
      audioRef.current.play()
    }
  },[isPlaying])

  const timeUpdate = useCallback((e)=>{
    const currentTime = e.target.currentTime;
    if(!isDraging){
      setCurrentTime(currentTime)
      setProgress((currentTime*1000/duration)*100)
    }
  },[isDraging,duration])
  //拖动后释放
  const sliderAfterChange = useCallback((value)=>{
    const currentTime =  ((value/100)*duration)/1000
    setProgress(value)
    setCurrentTime(currentTime)
    audioRef.current.currentTime = currentTime
    setDraging(false)
  },[duration])

  //拖动中
  const sliderChange = useCallback((value)=>{
    setDraging(true)
    setProgress(value)
    setCurrentTime(((value/100)*duration)/1000)
  },[duration])
  //数据处理
  
  return (
    <PlayerBarWrapper className='player_sprite'>
      <div className='hand'></div>
      <div className='wrap-v2'>
        <div className='wrap-content'>
        <Control >
          <button className='player_sprite btn prev' title='上一首'></button>
          <button className={`player_sprite btn ${isPlaying?'pause':'play'}`} onClick={()=>handleAudioPlay()}></button>
          <button className='player_sprite btn next' title='下一首'></button>
        </Control>
        <PlayInfo >
          <div className="image">
              <img src={currentSong.al && getSizeImage(currentSong.al.picUrl,32)} alt="img" />
              <NavLink to="/discover/player" className="mask player_sprite">
              </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name tohide">
                <NavLink to={`/song?id=${currentSong.id}`}>
                    {currentSong.name}
                </NavLink>
              </span>
              <ul className="singer-name tohide">{
                currentSong.ar && currentSong.ar.map((item,index)=>{
                  return (
                    <li key={item.id}>
                      <NavLink to={`/artist?id=${item.id}`}>
                        {item.name}
                      </NavLink>
                      {index !== currentSong.ar.length-1?'/':''}
                    </li>
                  )
                })
              }</ul>
            </div>
            <div className="progress">
              <Slider value={progress} onAfterChange={sliderAfterChange} onChange={sliderChange} tooltip={{ open: false }}/>
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>

        </PlayInfo>
        <Operator ></Operator>
        <audio src={currentSongUrl} onTimeUpdate={timeUpdate}  ref={audioRef} trolse='0' muted={false}></audio>
        </div>
      </div>
    </PlayerBarWrapper>
  )
})

export default AppPlayerBar