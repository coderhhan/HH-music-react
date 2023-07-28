import {getTopBanner,getHotRecommend,getNewAlbum,getTopList,getTopArtists,getTopPopular} from "@/services/recommend"
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
    topList:res
  }
}

const changeTopArtistsAction = (res)=>{
  return {
    type:ActionType.CHANGE_TOP_ARTISTS,
    topArtists:res.artists
  }
}

const changeTopPopularAction = (res)=>{
  return {
    type:ActionType.CHANGE_TOP_POPULAR,
    topPopulars:res.data.list
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
    Promise.all([getTopList(19723756),getTopList(3779629),getTopList(2884035)])
    .then(res=>{
      dispatch(changeTopListAction(res))
    })
  }
}


export const getTopArtistsAction =(params)=> {
  return (dispatch)=>{
    getTopArtists(params).then(res=>{
      dispatch(changeTopArtistsAction(res))
    })
  }
}

export const getTopPopularAction =(params)=> {
  return (dispatch)=>{
    getTopPopular(params).then(res=>{
      dispatch(changeTopPopularAction(res))
    })
  }
}







