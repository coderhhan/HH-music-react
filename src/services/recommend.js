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





export function getTopList(id) {
  return axios({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export const getTopArtists = (params)=>{
  return axios({url:'/top/artists',params:{
    limit:params.limit,
    offset:params.offset
  }})
}

export const getTopPopular = (limit)=>{
  return axios({url:'/dj/toplist/popular',params:{
    limit,
  }})
}

