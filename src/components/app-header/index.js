import React, { memo } from 'react'

import {HHAppHeaderWrapper,LeftWrapper,RightWrapper} from './style'

const HHAppHeader = memo(() => {
  return (
    <HHAppHeaderWrapper>
      <div className='content wrap-v1'>
        <LeftWrapper>
          <a href="#/" className='topbar_sprite logo'>logo</a>
        </LeftWrapper>

        <RightWrapper>
          right
        </RightWrapper>
      </div>
      <div className='divider'>

      </div>
    </HHAppHeaderWrapper>
  )
})

export default HHAppHeader