import {getTopBanner,getHotRecommend} from "@/services/recommend"
import * as ActionType  from './constants'

const changeTopBannerAction = (res)=>{
  return {
    type:ActionType.CHANGE_BANNERS,
    topBanners:res.banners
  }
}

const changeHotRecommendAction = (res)=>{
  return {
    type:ActionType.CHANGE_HOT_RECOMMEND,
    hotRecommends:res.result
  }
}


export const getTopBannerAction =()=> {
  return (dispatch)=>{
    getTopBanner().then(res=>{
      dispatch(changeTopBannerAction(res))
    })
  }
}


export const getHotRecommendAction =(limit)=> {
  return (dispatch)=>{
    getHotRecommend(limit).then(res=>{
      dispatch(changeHotRecommendAction(res))
    })
  }
}
