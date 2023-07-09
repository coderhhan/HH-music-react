import {Map} from 'immutable'
import *as ActionType from './constants'
const defaultState = Map({
  currentSong:{},
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
    default:{
      return state
    }
  }
}

export default reducer