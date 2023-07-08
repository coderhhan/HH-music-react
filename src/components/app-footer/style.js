import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  height: 325px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  .footer-icons{
    margin-top: 33px;
    margin-bottom: 26px;
    display: flex;
    justify-content: space-between;
    .icon{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .logo{
        width: 45px;
        height: 45px;
        text-indent: -99999px;

        &.logo-openplatform{
          background-position: -170px -5px;
          &:hover{
            background-position: -5px -115px;
          }
        }
        &.logo-trade{
          background-position: -5px -170px;
          &:hover{
            background-position: -60px -170px;
          }
        }
        &.logo-amped{
          background-position: -5px -60px;
          &:hover{
            background-position:-60px -5px;
          }
        }
        &.logo-xstudio{

          background-image: url(${require("@/assets/img/xStudio_default_icon.png")});
          background-size: 45px;
          &:hover{
            background-image: url(${require("@/assets/img/xStudioHover.png")});
          }
        }
        &.logo-auth{
          background-position: -60px -60px;
          &:hover{
            background-position: -115px -5px;
          }
        }
        &.logo-musician{
          background-position: -115px -115px;
          &:hover{
            background-position: -5px -5px;
          }
        }
        &.logo-cloudsong{
          background-image: url(${require("@/assets/img/cloudSong.png")});
          background-size: 45px;
          &:hover{
            background-image: url(${require("@/assets/img/cloudSongHover.png")});
          }
        }
        &.logo-reward{
          background-position: -170px -115px;
          &:hover{
            background-position: -60px -115px;
          }
        }
      }
      .title{
        position: absolute;
        width: 100px;
        text-align: center;
        display: block;
        margin-top: 10px;
        font-size: 12px;
        color: rgba(0,0,0, 0.5);
        bottom: -26px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const FooterBottom = styled.div`
  padding-top: 60px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;

  .link{
    color: #666;
   }
  
  .text{
    margin: 0 14px;
  }
  .police-logo {
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url(${require("@/assets/img/police.png")});
    background-size: cover;
    margin-right: 2px;
    margin-left: 8px;
    vertical-align: -2px;
  }
`
