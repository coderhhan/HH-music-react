import {Map} from 'immutable'
import *as ActionType from './constants'
const defaultState = Map({
  playList:[],
  currentSongIndex:0,
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSong:{},
  volume:100,//音量
  currentSongUrl:''
})

const reducer = (state=defaultState,action)=>{
  switch(action.type){
    case ActionType.CHANGE_CURRENT_SONG:{
      return state.set('currentSong',action.currentSong)
    }
    case ActionType.CHANGE_SONG_URL:{
      return state.set('currentSongUrl',action.currentSongUrl)
    }
    case ActionType.CHANGE_PLAY_LIST:{
      return state.set('playList',action.playList)
    }
    case ActionType.CHANGE_CURRENT_SONG_INDEX:{
      return state.set('currentSongIndex',action.currentSongIndex)
    }
    case ActionType.CHANGE_PLAY_SEQUENCE:{
      return state.set('playSequence',action.sequence)
    }
    case ActionType.CHANGE_PLAY_VOLUME:{
      return state.set('volume',action.volume)
    }
    
    default:{
      return state
    }
  }
}

export default reducer