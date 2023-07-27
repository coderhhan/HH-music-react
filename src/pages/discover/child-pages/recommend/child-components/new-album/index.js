import React, { memo, useEffect,useRef } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT_TEN } from '@/common/constants'


import { Carousel } from 'antd';
import  HeaderWrapperRCM from '@/components/theme-header-recommend'
import AlbumCover from '@/components/album-cover';
import { NewAlbumWrapper } from './style';


const NewAlbum = memo(() => {
  
  const carouselRef = useRef()
  const {newAlbums} = useSelector((state)=>{
    return {
      newAlbums:state.getIn(['recommend','newAlbums'])
    }
  },shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNewAlbumAction(HOT_RECOMMEND_LIMIT_TEN))
  },[dispatch])


  return (
    <NewAlbumWrapper>
       <HeaderWrapperRCM 
        moreLink="/discover/songs"
        title='新碟上架'
        />
        <div className='content'>
          <div className='arrow arrow-left header_icons' onClick={()=>carouselRef.current.prev()}></div>
          <div className='album'>
            <Carousel ref={carouselRef} dots={false}>
                {
                  [0,1].map((num,index)=>{
                    return (
                      <div className='album-list' key={index} >
                        {
                          newAlbums.slice(num*5,(num+1)*5).map(item=>{
                            return (
                            <AlbumCover className="album-item" 
                            key={item.id} 
                            name={item.name} 
                            img={item.picUrl} 
                            artist={item.artist}
                            size='100px'
                            imgy='100px'
                            bgpositiony='-570px'
                             />
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
            </Carousel>
          </div>
          <div className='arrow arrow-right header_icons' onClick={()=>carouselRef.current.next()}></div>
        </div>
    </NewAlbumWrapper>
  )
})

export default NewAlbum