import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  .hand{
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
  }
  .bg{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-position: 0 0;
    background-repeat: repeat;
    height: 52px;
  }
  .wrap-v2{
    .wrap-content{
      position: absolute;
      bottom: 0;
      height: 47px;
      width: 980px;
      display: flex;
      align-items: center;
      z-index: 12;
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
    img{
      width: 34px;
      height: 34px;
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
   display: flex;
   .btns-left{
    display: flex;
    margin-left: 100px;
    span{
      cursor: pointer;
      width: 25px;
      height: 25px;
      margin: 8px 2px 0 0;
    }
    .collect-icon{
      background-position: -88px -163px;
      &:hover{
        background-position: -88px -189px;
      }
    }
    .shared-icon{
      background-position:-114px -163px;
      &:hover{
        background-position: -114px -189px;
      }
    }
  }
  .sound-control-box{
    position: relative;
    .sound-control{
      visibility: ${props=>props.show?'visible':'hidden'};
      width: 32px;
      height: 114px;
      position: absolute;
      bottom: 38px;
      left: -6px;
      z-index: 10;
      background-position:0 -503px;
     .ant-slider{
       height: 80%;
      }
      .ant-slider-vertical{
        margin: 11px 10px 5px  10px
      }
      .ant-slider-rail {
        height: 9px;
        background: url(${require("@/assets/img/playbar.png")}) right 0;
      }

      .ant-slider-track {
        height: 9px;
        width: 4px;
        background: url(${require("@/assets/img/playbar.png")}) -40px bottom;
      }
      .ant-slider{
        .ant-slider-handle {
          position: absolute;
           width: 18px;
           height:20px;
           left: -3px;
           background: url(${require("@/assets/img/iconall.png")}) -40px -250px;
          &::after{
            display: none;
          }
        }
      }
     
    }
    span{
      display: block;
      cursor: pointer;
      width: 25px;
      height: 25px;
      margin: 8px 2px 0 0;
    }
    .sound-icon{
      background-position: ${props=>{
        if(props.volume>0){
          return " -2px -248px";
        }else{
          return "-104px -69px";
        }
      }};
      &:hover{
        background-position:${props=>{
          if(props.volume>0){
            return "-31px -248px;";
          }else{
            return "-126px -69px";
          }
        }}; 
      }
      
    }
  }
  .btns-right{
    display: flex;
    padding-left: 13px;
    background-position: -147px -238px;
    span{
      cursor: pointer;
      width: 25px;
      height: 25px;
      margin: 8px 2px 0 0;
    }
    
    .play-type-icon{
      background-position:${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
      &:hover{
        background-position:${props => {
        switch(props.sequence) {
          case 1:
            return "-93px -248px";
          case 2:
            return "-93px -344px";
          default:
            return "-33px -344px;";
        }
      }};
      }
    }
    .playlist-icon{
      width: 38px;
      padding-left: 21px;
      background-position: -42px -68px;
      line-height: 27px;
      text-align: center;
      &:hover{
        background-position: -42px -98px;
      }
    }
  }
`

export const PlayListWrapper = styled.div`
    left: 50%;
    bottom: 46px;
    margin-left: -493px;
    position: absolute;
    width: 986px;
    overflow: hidden;
    .palylist-header{
      height: 40px;
      background-position:0 0;
      color: white;
      .header-left{
        box-sizing: border-box;
        padding: 0 20px 0 30px;
        height: 100%;
        width: 553px;
        display: flex;
        align-items: center;
        justify-content: space-between;

      }
      .header-right{
        width: 420px;
      }
    }
    .palylist-content{
      height: 260px;
      display: flex;
      background-position:-1014px 0;
      background-repeat: repeat-y;
      position: relative;
      img{
        top:40px;
        width: 980px;
        position: absolute;
        opacity: .2;
        filter: blur(10px);
      }
      .left-content{
        width: 553px;
        height: 260px;
        position: absolute;
        left: 2px;
        top: 0;
        z-index: 4;
        overflow: auto;
        .list{
          .list-item{
            color: white;
            display: flex;
            color: #ccc;
            cursor: pointer;
            a{
              color: #ccc;
            }
            &:hover,&.active{
              color: white;
              background-color: rgba(0,0,0,0.4);
              a{
                color: white;
              }
              
            }
            &.active{
              .col-1{
                i{
                  display: inline-block;
                }
              }
            }
            .col{
              padding-left: 10px;
              height: 28px;
              line-height: 28px;
            }
            .col-1{
              width: 10px;
              i{
                display:none;
                margin-top: 8px;
                width: 10px;
                height: 13px;
                background-position: -182px 0;
              }
            }
            .col-2{
              width: 256px;
            }
            .col-3{
              width: 78px;
            }
            .col-4{
              width: 70px;
            }
            .col-5{
              width: 35px
            }
            .col-6{
              width: 36px
            }
          }
        }
      }
      .right-content{
        position: absolute;
        width: 420px;
        height: 260px;
        left: 561px;
        top: 0;
        z-index: 4;
        overflow: auto;
        .lyric-row{
          transition: .3s all;
          margin:  10px;
          height: 20px;
          color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          &.active{
            font-size: 16px;
            height: 30px;
            color: white;
          }
        }
      }
      .flag-content{
        position: absolute;
        width: 6px;
        height: 260px;
        background: #000;
        left: 555px;
        top: 0;
        z-index: 4;
      }
    }
`