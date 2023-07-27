import {getTopBanner,getHotRecommend,getNewAlbum,getTopList} from "@/services/recommend"
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

const changeNewAlbumAction = (res)=>{
  return {
    type:ActionType.CHANGE_NEW_ALBUM,
    newAlbums:res.albums
  }
}

const changeTopListAction =  (res)=>{
  return {
    type:ActionType.CHANGE_TOP_LIST,
    topList:res.albums
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


export const getNewAlbumAction =(limit)=> {
  return (dispatch)=>{
    getNewAlbum(limit).then(res=>{
      dispatch(changeNewAlbumAction(res))
    })
  }
}




export const getTopListAction =(limit)=> {
  return (dispatch)=>{
    getTopList().then(res=>{
      dispatch(changeTopListAction(res))
    })
  }
}


