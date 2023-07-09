import axios from './axios'

export const getTopBanner = (data)=>{
  return axios({url:'/banner',
  params: {
    type:0,
  }})
}


export const getHotRecommend = (limit)=>{
  return axios({url:'/personalized',params:{
    limit
  }})
}

export const getNewAlbum = (limit)=>{
  return axios({url:'/album/newest',params:{
    limit
  }})
}


export function getTopList() {
  return axios({
    url: "/album/new",
    params: {
      limit:30,
      offset:1
    }
  })
}