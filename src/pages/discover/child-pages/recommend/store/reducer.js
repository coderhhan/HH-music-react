import { Map }from 'immutable'
import *as ActionType from './constants'

const defaultState =Map({
  topBanners:[],
  hotRecommends:[]
})

function reducer(state=defaultState,action) {
  switch(action.type) {
    case ActionType.CHANGE_BANNERS:{
      return state.set("topBanners", action.topBanners);
    }
    case ActionType.CHANGE_HOT_RECOMMEND:{
      return state.set("hotRecommends", action.hotRecommends);
    }
    default:{
      return state
    }
  }
}

export default reducer