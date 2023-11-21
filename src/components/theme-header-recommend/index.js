import PropTypes from 'prop-types';
import React, { Fragment, memo } from 'react'
import { HeaderWrapper } from './style'

const HeaderWrapperRCM = memo((props) => {
  const { title, keywords, moreLink } = props
  const keywordItem = (item, index) => {
    if (index === keywords.length - 1) {
      return <a href='/discover/songs' className='keyword-item' key={item}>{item}</a>
    } else {
      return (
        <Fragment key={item}>
          <a href='/discover/songs' className='keyword-item'>{item}</a>
          <span className='line'>|</span>
        </Fragment>
      )
    }
  }

  return (
    <HeaderWrapper className='header_icons'>
      <div className='left'>
        <a href='/discover/songs' className='title'>{title}</a>
        <div className='keywords'>
          {
            keywords && keywords.map((item, index) => {
              return keywordItem(item, index)
            })
          }
        </div>
      </div>
      <div className='right'>
        <a href={moreLink}>更多</a>
        <i className='header_icons more'></i>
      </div>

    </HeaderWrapper>
  )
})
HeaderWrapperRCM.protoTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
HeaderWrapperRCM.defaultProps = {
  keywords: []
}

export default HeaderWrapperRCM
