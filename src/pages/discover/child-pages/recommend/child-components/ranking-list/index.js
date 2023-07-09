import React, { memo,useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT_THIRTY } from '@/common/constants'
import { topHeaderList } from '@/common/local-data'

import { RankingListWrapper } from './style'
import  HeaderWrapperRCM from '@/components/theme-header-recommend'



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

  return (
    <RankingListWrapper>
       <HeaderWrapperRCM 
        moreLink="/discover/songs"
        title='榜单'
        />
        <div className='content top_list_bg'>
          {
            topHeaderList.map((header,index)=>{
              return (
                <dl key={header.title} className="list-column">
                  <dt className='list-top'>
                    <div className='img-box'>
                      <img src={header.img} alt="" />
                      <a href="/discover/toplist?id=19723756" className='mask'></a>
                    </div>
                    <div className='title-box'>
                      {header.title}
                      <div className='btn-box'>
                        <i className='play-btn header_icons'></i>
                        <i className='collect-btn header_icons'></i>
                      </div>
                    </div>
                  </dt>
                  <dd>
                    <ol>
                      {
                        topList.slice(index*10,(index+1)*10).map((item,indey)=>{
                          return (
                            <li key={item.id}>
                             <span className={ `no ${(indey+1) <=3 ? 'no-top':''}`}>{indey+1}</span>
                             <a href={`/song?id=${item.id}`} className="name tohide" title={item.name}>{item.name}</a>
                             <div className='opreation-btns'>
                                <i className='play-btn btn header_icons'></i>
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