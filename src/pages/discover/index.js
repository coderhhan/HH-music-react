import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, NavLink } from 'react-router-dom/cjs/react-router-dom'


import { DiscoverWrapper, ToMenuWrapper } from './style'
import { dicoverMenu } from '@/common/local-data'

const Discover = memo((props) => {

  return (
    <DiscoverWrapper>
      <div className='top'>
      <ToMenuWrapper className='wrap-v1'>
        <ul>
          {
            dicoverMenu.map(item=>{
              return (
                <li  key={item.link}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
        </ToMenuWrapper>
      </div>
      <HashRouter>
        {renderRoutes(props.route.routes)}
      </HashRouter>
    </DiscoverWrapper>
  )
})

export default Discover