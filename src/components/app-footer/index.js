import React, { Fragment, memo } from 'react'
import { AppFooterWrapper,FooterBottom } from './style'
import { footerIcon,footerLinks } from '@/common/local-data'


const HHAppFooter = memo(() => {

  const links =  (item,index)=>{
      if(index !== footerLinks.length-1) {
        return (
          <Fragment key={item.title}>
            <a className='link' href={item.link}>{item.title}</a>
            <span className='line'>|</span>
          </Fragment>
        )
      }else{
        return  <a className='link' key={item.title} href={item.link}>{item.title}</a>
      }
  }
  return (
    <AppFooterWrapper>
      <div className='wrap-v2'>
        <ul className='footer-icons'>
          {
            footerIcon.map(item=>{
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
            footerLinks.map((item,index)=>{
              return  links(item,index)
            })
          } 
          </p>
          <p>
            <a className='link' href="https://jubao.163.com" rel="noopener noreferrer" target="_blank" >廉正举报</a>
            <span className='text'>不良信息举报邮箱: 51jubao@service.netease.com</span>
            <span >客服热线：95163298</span>
         </p>
         <p>
            <span className='link'>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className='link'>增值电信业务经营许可证：浙B2-20150198 </span>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" className='link' >粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
          </p>
          <p >
            <span className='link'>网易公司版权所有©1997-2023</span><span className='link'>杭州乐读科技有限公司运营：</span><a href="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/28066758115/1fc7/27fc/c5c1/158cb31a7117730c58652e2c6625e4c8.jpg" target="_blank" 
            rel="noopener noreferrer" className='link'>浙网文[2021] 1186-054号</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank" className='link'>
            <span className="police-logo"></span>
            <span className='link'>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterBottom>
      </div>

    </AppFooterWrapper>
  )
})

export default HHAppFooter