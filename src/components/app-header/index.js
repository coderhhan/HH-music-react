import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'
import { HHAppHeaderWrapper,LeftWrapper,RightWrapper } from './style'

const HHAppHeader = memo(() => {

    
  const menuItem = (item,index)=>{
    if(index<3) {
      return <NavLink to={item.link} key={item.link}>
        {item.title}
        <i  className='topbar_sprite icon'></i>
        </NavLink>
    }else{
      return <a href={item.link} key={item.link}>{item.title}</a>
    }
  }


  return (
    <HHAppHeaderWrapper>
      <div className='content wrap-v1'>
        <LeftWrapper>
          <a href="#/" className='topbar_sprite logo'>logo</a>
          <div className='menu-list'>
            {
              headerLinks.map((item,index)=>{
                return (
                  <div key={item.link}>
                    {menuItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </LeftWrapper>

        <RightWrapper>
          <Input className='search-input' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />}/>
          <div className='center-btn flex-center'>创作者中心</div>
          <div className='login-btn'>登录</div>
        </RightWrapper>
      </div>
      <div className='divider'>

      </div>
    </HHAppHeaderWrapper>
  )
})

export default HHAppHeader