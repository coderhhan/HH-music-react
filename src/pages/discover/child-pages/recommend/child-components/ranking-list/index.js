import React, { memo,useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getTopListAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT_THIRTY } from '@/common/constants'
import { topHeaderList } from '@/common/local-data'

import { RankingListWrapper } from './style'
import  HeaderWrapperRCM from '@/components/theme-header-recommend'
import { getSongDetailAction } from '../../../../../player/store/actionCreators'
import { getSizeImage } from '../../../../../../utils/format-utils'



const RankingList = memo(() => {

  const {topList} = useSelector((state)=>{
    return {
      topList:state.getIn(['recommend','topList'])
    }
  },shallowEqual)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopListAction(HOT_RECOMMEND_LIMIT_THIRTY))
  },[dispatch])

  const playSongClick = (id)=>{
    dispatch(getSongDetailAction(id))
  }
  return (
    <RankingListWrapper>
       <HeaderWrapperRCM 
        moreLink="/discover/songs"
        title='榜单'
        />
        <div className='content top_list_bg'>
          {
            topList.map((header,index)=>{
              if(!header.playlist){
                return ''
              }
              return (
                <dl key={header.playlist.id} className="list-column">
                  <dt className='list-top'>
                    <div className='img-box'>
                      <img src={getSizeImage(header.playlist.coverImgUrl,80)} alt="" />
                      <a href="/discover/toplist?id=19723756" className='mask'></a>
                    </div>
                    <div className='title-box'>
                      {header.playlist.name}
                      <div className='btn-box'>
                        <i className='play-btn header_icons'></i>
                        <i className='collect-btn header_icons'></i>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      {
                          header.playlist && header.playlist.tracks.slice(0,10).map((item,indey)=>{
                          return (
                            <li key={item.id}>
                             <span className={ `no ${(indey+1) <=3 ? 'no-top':''}`}>{indey+1}</span>
                             <NavLink to={`/discover/player?id=${item.id}`} className="name tohide" title={item.name}>
                                {item.name}
                            </NavLink>
                             <div className='opreation-btns'>
                                <i className='play-btn btn header_icons' onClick={()=>playSongClick(item.id)}></i>
                                <i className='add-btn btn opreation_icons'></i>
                                <i className='collect-btn btn header_icons'></i>
                             </div>
                            </li>
                          )
                        })
                      }
                    </ol>
                    <div className='more'>
                      <a href="/discover/toplist?id=19723756" >查看更多></a>
                    </div>
                  </dd>
                </dl>
              )
            })
          }
        </div>
    </RankingListWrapper>
  )
})

export default RankingList