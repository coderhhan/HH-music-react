import { styled } from "styled-components";

export const TopBannerWrapper = styled.div`

      background: url(${props=>props.backgroundimage}) center center/6000px;
    .banner{
      display: flex;
      position:relative;
    }
`
export const BannerLeftWrapper = styled.div`
    width: 730px;
    .banner-item{
      overflow: hidden;
      height: 270px;
      img{
        width:100%
      }
     
    }
    .slick-dots-bottom {
      bottom: 20px;
      & li{
        transition: unset;
        & button{
          transition: unset;
          width: 20px;
          height: 20px;
          background-image: url(${require("@/assets/img/banner.png")});
          background-position: 3px -343px;
          background-color: transparent;
          &::after{
            position: unset;
          }
        }

        &.slick-active{
          width: 16px;
          & button{
            background-image: url(${require("@/assets/img/banner.png")});
            background-color: transparent;
            background-position: -16px -343px;
          }
        }
      }
    }

`
export const BannerRightWrapper = styled.div`
  position: relative;

  &.download,.download-btn:hover{
    background-image: url(${require("@/assets/img/download.png")});
  }

  &.download {
    width: 250px;
    height: 270px;
    .download-btn{
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      text-indent: -9999px;
      &:hover{
        background-position: 0 -290px
      }
    }
    p{
      font-size: 12px;
      margin-top:8px;
      text-align: center;
      color: #8d8d8d;
    }
  }

  .shadow{
    width: 20px;
    height: 270px;
    position: absolute;
    &.left{
      top: 0;
      left: -20px;
      background-position: -1px 0;
    }
    &.right{
      top: 0;
      right: -20px;
      background-position: -20px 0;
    }
  }

`

export const BannerControlWrapper = styled.div`
  .btn {
    position: absolute;
    cursor: pointer;
    top:50%;
    height:62px;
    margin-top: -31px;
    width: 36px;
    background-color: transparent;
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
    &:hover{
      background-position: 0 -430px;
    }
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
    &:hover{
      background-position: 0 -578px;
    }
  }
`

