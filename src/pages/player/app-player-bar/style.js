import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .hand{
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
  }
  .wrap-v2{
    .wrap-content{
      position: absolute;
      bottom: 0;
      height: 47px;
      display: flex;
      align-items: center;
    }
   
  }
`
export const Control = styled.div`
  width: 137px;
  display: flex;
  align-items: center;
  .btn{
    cursor: pointer;
    margin-right: 8px;
    width: 28px;
    height: 28px;
  }
  .prev{
    background-position: 0 -130px;
    &:hover{
      background-position: -30px -130px;
    }
  }
  .play{
    width: 36px;
    height: 36px;
    background-position: 0 -204px;
    &:hover{
      background-position: -40px -204px;
    }
  }
  .pause{
    width: 36px;
    height: 36px;
    background-position: 0 -165px;
    &:hover{
      background-position: -40px -165px;
    }
  }
  .next{
    background-position: -80px -130px;
    &:hover{
      background-position: -110px -130px;
    }
  }

`
// background: url(${require("@/assets/img/progress_bar.png")}) right 0;
export const PlayInfo = styled.div` 
  display: flex;
  align-items: center;
  .image{
    position: relative;
    width: 34px;
    height: 34px;
    margin: 0px 15px 0 0;
    .mask{
      background-position: 0 -80px;
    }
  }
  .info{
    .song{
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
      display: flex;
      .song-name{
        max-width:300px;
        a{
          color: #e8e8e8;
        } 
      }
      .singer-name {
        margin-left: 10px;
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
        display: flex;
        a{
          color: #9b9b9b;
        } 
      }
    }
  }

  .progress {
      display: flex;
      align-items: center;
      position: relative;
      .ant-slider {
        width: 493px;
        margin-right: 10px;
        margin-top: -4px;
        margin-left: 0px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/statbar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/statbar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: 2px;
          inset-block-start:-3px !important;
          /* background: url(${require("@/assets/img/statbar.png")}) 22px -261px; */
          &::before{
            top: -7px;
            right: -13px;
            width: 22px;
            height: 24px;
            background: url(${require("@/assets/img/iconall.png")}) 0 -250px;
            inset-inline-start:-2px !important;
            inset-block-start: -2px !important;
          }
          
          &::after{
            display: none;
          }
        }
        /deep/.ant-slider-horizontal{
          padding-block: 0px;
          height: 16px;
        }
      }

      .time {
        position: absolute;
        top: -3px;
        right: -84px;
        color: #797979;
        text-shadow: 0 1px 0 #121212;
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
  }
 
`

export const Operator = styled.div`

`

