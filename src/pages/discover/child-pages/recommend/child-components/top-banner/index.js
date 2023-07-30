import React, { memo,useRef,useEffect, useState } from 'react'
import {useDispatch,useSelector,shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'


import {TopBannerWrapper,BannerLeftWrapper,BannerRightWrapper,BannerControlWrapper} from './style'
import { Carousel } from 'antd';

const TopBanner = memo((props) => {
 
    //内部state
   const carouselRef = useRef()
   const [backgroundImage,setImage] = useState('')

   //用redux提供的hooks调用dispatch 
   const dispatch  = useDispatch()
   const {topBanners} = useSelector((state)=>{
     return {
       topBanners:state.getIn(['recommend','topBanners'])
     }
   },shallowEqual)

  //其他hooks
   useEffect(()=>{
     dispatch(getTopBannerAction())
   },[dispatch])

   //其他逻辑
  const handlebeforeChange = (from,to)=>{
    setImage(topBanners[to].imageUrl+'?imageView&blur=40x20')
  }
  return (
    <TopBannerWrapper backgroundimage={backgroundImage}>
      <div className='banner wrap-v2'>
        <BannerLeftWrapper>
          <Carousel effect="fade" autoplay ref={carouselRef} beforeChange={handlebeforeChange}>
          {
            topBanners.map(item=>{
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })
          }
          </Carousel>
        </BannerLeftWrapper>
        <BannerRightWrapper className='download'>
          <a className='download-btn' href="/download">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span className='shadow left banner_icon'></span>
          <span className='shadow right banner_icon'></span>
        </BannerRightWrapper>
        <BannerControlWrapper>
          <button className='btn left banner_icon' onClick={()=>carouselRef.current.next()}></button>
          <button className='btn right banner_icon' onClick={()=>carouselRef.current.next()}></button>
        </BannerControlWrapper>

      </div>
      
      
    </TopBannerWrapper>
  )
})

export default TopBanner