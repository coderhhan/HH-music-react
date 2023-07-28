import { Map }from 'immutable'
import *as ActionType from './constants'

const defaultState =Map({
  topBanners:[],
  hotRecommends:[],
  newAlbums:[],
  topList:[],
  topArtists:[],
  topPopulars:[]
})

function reducer(state=defaultState,action) {
  switch(action.type) {
    case ActionType.CHANGE_BANNERS:{
      return state.set("topBanners", action.topBanners);
    }
    case ActionType.CHANGE_HOT_RECOMMEND:{
      return state.set("hotRecommends", action.hotRecommends);
    }
    case ActionType.CHANGE_NEW_ALBUM:{
      return state.set("newAlbums", action.newAlbums);
    }
    case ActionType.CHANGE_TOP_LIST:{
      return state.set("topList", action.topList);
    }
    case ActionType.CHANGE_TOP_ARTISTS:{
      return state.set("topArtists", action.topArtists);
    }
    case ActionType.CHANGE_TOP_POPULAR:{
      return state.set("topPopulars", action.topPopulars);
    }
    default:{
      return state
    }
  }
}

export default reducer