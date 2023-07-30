
import { getSongDetail,getSongUrl,getLyric } from '@/services/player'
import { parseLyric } from '../../../utils/format-lyric'
import *as ActionType from './constants'


const changeSongDetail = function(currentSong){
  return {
    type:ActionType.CHANGE_CURRENT_SONG,
    currentSong
  }
}

const changeSongUrlDetail = function(currentSongUrl){
  return {
    type:ActionType.CHANGE_SONG_URL,
    currentSongUrl
  }
}

const changePlayList = function(playList){
  return {
    type:ActionType.CHANGE_PLAY_LIST,
    playList
  }
}



const changeCurrentSongIndex = function(currentSongIndex){
  return {
    type:ActionType.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
  }
}

export const changePlayVolume = function(volume){
  return {
    type:ActionType.CHANGE_PLAY_VOLUME,
    volume
  }
}

export const changeLyric = function(lyric){
  return {
    type:ActionType.CHANGE_LYRIC,
    lyric
  }
}

export const changeLyricIndex = function(index){
  return {
    type:ActionType.CHANGE_LYRIC_INDEX,
    currentLyricIndex:index
  }
}




export const getSongDetailAction = (ids)=>{
  return (dispatch,getState)=>{
     //判断ids有没有存在在playlist中
     const playlist = getState().getIn(['player','playList'])
     const index = playlist.findIndex(item=>item.id == ids)
     if(index !== -1) {
        dispatch(changeSongDetail(playlist[index]))
        dispatch(changeCurrentSongIndex(index))
        dispatch(getSongUrlDetailAction({id:ids,level:'exhigh'}))
        dispatch(getLyricAction(ids))
     }else{
      //不存在调接口，增加列表一条数据，改变当前播放索引
       getSongDetail(ids)
        .then(res=>{
          
          const song = res.songs && res.songs[0]
          if(!song) return
          const newPlayList = [...playlist]
          newPlayList.push(song)
          dispatch(changePlayList(newPlayList))
          dispatch(changeCurrentSongIndex(newPlayList.length-1))
          dispatch(changeSongDetail(res.songs[0]))
          dispatch(getSongUrlDetailAction({id:ids,level:'exhigh'}))
          dispatch(getLyricAction(ids))
        })
     }
   
  }
}

export const getSongUrlDetailAction = (params)=>{
  return dispatch=>{
    return getSongUrl(params)
    .then(res=>{
      dispatch(changeSongUrlDetail(res.data[0].url))
      console.log(res.data[0].url)
    })
  }
}

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: ActionType.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence
  }
}


export const changePlaySong = (tag)=>{
  return (dispatch,getState)=>{
    const sequence = getState().getIn(['player','playSequence'])
    const playList = getState().getIn(['player','playList'])
    const index = getState().getIn(['player','currentSongIndex'])
    let currentSongIndex = getState().getIn(['player','currentSongIndex'])
    // 0 顺序播放 1 随机播放 2 单曲循环
    switch(sequence) {
      case 2:
      case 0:{
        currentSongIndex+=tag
        if(currentSongIndex === playList.length) {
          currentSongIndex = 0
        }
        if(currentSongIndex === -1 ) {
          currentSongIndex = playList.length - 1;
        }
        break
      }
      case 1:{
        currentSongIndex = Math.floor(Math.random() * playList.length);
        //排除自己
        while(index === currentSongIndex && playList.length>0) {
          currentSongIndex = Math.floor(Math.random() * playList.length);
        }
      }
    }
    
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongIndex(currentSongIndex))
    dispatch(changeSongDetail(currentSong))
    dispatch(getSongUrlDetailAction({id:currentSong.id,level:'exhigh'}))
  }
}


export const getLyricAction = (id)=>{
  return dispatch=>{
    return getLyric(id)
    .then(res=>{
      const lyric = parseLyric(res.lrc.lyric)
      dispatch(changeLyric(lyric))
      dispatch(changeLyricIndex(0))
      
    })
  }
}