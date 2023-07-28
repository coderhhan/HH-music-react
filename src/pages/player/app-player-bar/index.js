import React, { memo,useCallback,useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {  formatMinuteSecond,getSizeImage } from '@/utils/format-utils';
import { changePlaySequenceAction, getSongDetailAction,getSongUrlDetailAction,changePlaySong,changePlayVolume} from '../store/actionCreators'

import { Slider,Tooltip,Popover } from 'antd';
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import {Control, Operator, PlayerBarWrapper, PlayInfo} from './style'

const AppPlayerBar = memo(() => {

  const audioRef = useRef()
  const [currentTime, setCurrentTime] = useState(0);
  const [progress,setProgress] = useState(0)
  const [duration,setDuration]=useState(0)
  const [isPlaying,setIsPlaying] = useState(false)
  const [isDraging,setDraging] = useState(false)
  const {currentSong,currentSongUrl,playSequence,playList,volume} = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong']),
      currentSongUrl:state.getIn(['player','currentSongUrl']),
      playSequence:state.getIn(['player','playSequence']),
      playList:state.getIn(['player','playList']),
      volume:state.getIn(['player','volume']),
      
    }
  },shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(getSongUrlDetailAction({id:2060079395,level:'exhigh'}))
    // dispatch(getSongDetailAction(2060079395))
  },[dispatch])

  useEffect(()=>{
    setDuration(currentSong.dt??0)
    if(currentSongUrl) {
      handleAudioPlay()
    }
  },[currentSong,currentSongUrl])
  
  //其他逻辑处理
  //播放
  const handleAudioPlay = useCallback((e)=>{
    if(!currentSongUrl) {
      return
    }
    if(isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
    }else{
      setIsPlaying(true)
      audioRef.current.play()
    }
  },[isPlaying,currentSongUrl])

  const timeUpdate = useCallback((e)=>{
    const currentTime = e.target.currentTime;
    if(!isDraging){
      setCurrentTime(currentTime)
      setProgress((currentTime*1000/duration)*100)
    }
    if(currentTime * 1000 === duration) {
      dispatch(changePlaySong(1))
    }
  },[isDraging,duration])

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changePlaySong(1));
    }
  }

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

  // 0 顺序播放 1 随机播放 2 单曲循环
  const playSequenceEnum = {
    0:'顺序播放',
    1:'随机播放',
    2:'单曲循环'
  }
  const handleChangePlaysequence = ()=>{
   dispatch(changePlaySequenceAction(playSequence+1))
  }
  //-1 上一首 1下一首
  const handleChangeSong = (type)=>{
    dispatch(changePlaySong(type))
  }


  //音量
  const sliderChangeVolume = (value)=>{
    dispatch(changePlayVolume(value))
    audioRef.current.volume=value/100
  }
  return (
    <PlayerBarWrapper className='player_sprite'>
      <div className='hand'></div>
      <div className='wrap-v2'>
        <div className='wrap-content'>
        <Control >
          <button className='player_sprite btn prev' title='上一首' onClick={()=>handleChangeSong(-1)}></button>
          <button className={`player_sprite btn ${isPlaying?'pause':'play'}`} onClick={()=>handleAudioPlay()}></button>
          <button className='player_sprite btn next' title='下一首'  onClick={()=>handleChangeSong(1)}></button>
        </Control>
        <PlayInfo >
          <div className="image">
              <img src={currentSong.al ? getSizeImage(currentSong.al.picUrl,32):require('@/assets/img/default_album.jpg')} alt="img" />
              <NavLink to={currentSong.id?'/discover/player?id='+currentSong.id:'#'} className="mask player_sprite">
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
        <Operator sequence={playSequence}>
         <div className='btns-left'>
            <span  className='collect-icon player_sprite'></span>
            <span  className='shared-icon player_sprite'></span>
          </div>
          <div className='btns-right player_sprite'>
            <div  className='sound-control-box'>
              <div className='sound-control player_sprite'>
                <Slider value={volume}  onChange={sliderChangeVolume}  tooltip={{ open: false }} vertical />
              </div>
              <span className='sound-icon player_sprite'></span>
            </div>  
            <Tooltip placement="top" title={playSequenceEnum[playSequence]} arrow={true}>
              <span className='play-type-icon player_sprite' onClick={()=>handleChangePlaysequence()}></span>
            </Tooltip>
            <span className='playlist-icon player_sprite'></span>
          </div>
        </Operator>
        <audio src={currentSongUrl} onTimeUpdate={timeUpdate} onEnded={timeEnded}  ref={audioRef} trolse='0' muted={false}></audio>
        </div>
      </div>
    </PlayerBarWrapper>
  )
})

export default AppPlayerBar