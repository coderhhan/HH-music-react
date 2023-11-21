import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import MyInfo from '../my-info'
import RightContentWrapper from './style'
import { getTopArtistsAction, getTopPopularAction } from '../../store/actionCreators'
import { getSizeImage } from '../../../../../../utils/format-utils'

const RightContent = memo((props) => {

  const { topArtists } = useSelector((state) => {
    return {
      topArtists: state.getIn(['recommend', 'topArtists'])
    }
  }, shallowEqual)

  const { topPopulars } = useSelector((state) => {
    return {
      topPopulars: state.getIn(['recommend', 'topPopulars'])
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopArtistsAction({
      offset: 0,
      limit: 5
    }))
    dispatch(getTopPopularAction(5))
  }, [dispatch])




  return (
    <RightContentWrapper>
      <MyInfo></MyInfo>
      <div className='box-1'>
        <h3 className='head-row'><span className='title'>入驻歌手</span> <span className='more-btn'>查看全部 ></span></h3>
        <ul>
          {
            topArtists.map(artis => (
              <li key={artis.id} className="list-item bg">
                <a href="#">
                  <div className='left-content'>
                    <img src={getSizeImage(artis.img1v1Url, 62)} alt="" />
                  </div>
                  <div className='right-content border'>
                    <h4 className='h-name'><span className='name tohide'>{artis.name}</span></h4>
                    <p className='p-desc'><span className='desc tohide'>{artis.name}</span></p>
                  </div>
                </a>
              </li>
            )
            )
          }
        </ul>
        <a href="#" className='btn-to-recruit button2_sprite'>
          <i className='button2_sprite'>申请成为网易音乐人</i>
        </a>
      </div>
      <div className='box-1 popular'>
        <h3 className='head-row'><span className='title'>热门主播</span></h3>
        <ul>
          {
            topPopulars.map(artis => (
              <li key={artis.id} className="list-item">
                <a href="#">
                  <div className='left-content'>
                    <img src={getSizeImage(artis.avatarUrl, 40)} alt="" />
                  </div>
                  <div className='right-content '>
                    <h4 className='h-name tohide'><span className='name '>{artis.nickName}</span></h4>
                    <p className='p-desc tohide'><span className='desc '>{artis.nickName}</span></p>
                  </div>
                </a>
              </li>
            )
            )
          }
        </ul>
      </div>

    </RightContentWrapper>
  )
})

RightContent.propTypes = {}

export default RightContent