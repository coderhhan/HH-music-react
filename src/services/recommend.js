import axios from './axios'

export const getTopBanner = (data)=>{
  return axios({url:'/banner',data})
}


export const getHotRecommend = (limit)=>{
  return axios({url:'/personalized',params:{
    limit
  }})
}

