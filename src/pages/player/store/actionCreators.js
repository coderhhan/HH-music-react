
import { getSongDetail,getSongUrl } from '@/services/player'
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


export const getSongDetailAction = (ids)=>{
  return dispatch=>{
    return getSongDetail(ids)
    .then(res=>{
      dispatch(changeSongDetail(res.songs[0]))
    })
  }
}

export const getSongUrlDetailAction = (params)=>{
  return dispatch=>{
    return getSongUrl(params)
    .then(res=>{
      dispatch(changeSongUrlDetail(res.data[0].url))
    })
  }
}

