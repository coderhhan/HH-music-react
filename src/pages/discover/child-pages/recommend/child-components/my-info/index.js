import PropTypes from 'prop-types'
import React, { memo } from 'react'
import MyInfoWrapper from './style'

const MyInfo = memo((props) => {
  return (
    <MyInfoWrapper>
      <div className='no-login header_icons'>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href="#" className='login-btn header_icons'>
          用户登录
        </a>
      </div>
    </MyInfoWrapper>
  )
})

MyInfo.propTypes = {}

export default MyInfo