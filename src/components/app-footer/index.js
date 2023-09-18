import React, { Fragment, memo } from 'react'
import { AppFooterWrapper, FooterBottom } from './style'
import { footerIcon, footerLinks } from '@/common/local-data'


const HHAppFooter = memo(() => {

  const links = (item, index) => {
    if (index !== footerLinks.length - 1) {
      return (
        <Fragment key={item.title}>
          <a className='link' href={item.link}>{item.title}</a>
          <span className='line'>|</span>
        </Fragment>
      )
    } else {
      return <a className='link' key={item.title} href={item.link}>{item.title}</a>
    }
  }
  return (
    <AppFooterWrapper>
      <div className='wrap-v2'>
        <ul className='footer-icons'>
          {
            footerIcon.map(item => {
              return (
                <li className='icon' key={item.title}>
                  <a href={item.link} target="blank"
                    rel="noopener noreferrer"
                    className={`logo footer_icon ${item.className}`}
                  >{item.title}
                  </a>
                  <span className='title'>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
        <FooterBottom className='wrap-v2'>
          <p>
            {
              footerLinks.map((item, index) => {
                return links(item, index)
              })
            }
          </p>
          <p>
            <a className='link' href="https://jubao.163.com" rel="noopener noreferrer" target="_blank" >廉正举报</a>
            <span className='text'>不良信息举报邮箱: 906271803@qq.com</span>
            <span >客服热线：10086</span>
          </p>
          {/* <p>
            <span className='link'>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className='link'>增值电信业务经营许可证：浙B2-20150198 </span>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className='link' >粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
          </p> */}
          <p >
            <span className='link'>hhwzw公司版权所有©2023-2023</span>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className='link'>
              <span className="police-logo"></span>
              <span className='link'>京ICP备2020046965号-2</span>
            </a>
          </p>
        </FooterBottom>
      </div>

    </AppFooterWrapper>
  )
})

export default HHAppFooter