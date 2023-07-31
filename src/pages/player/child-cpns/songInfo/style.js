import styled from "styled-components";

const SongInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    .img-wrap{
      width: 206px;
      position: relative;
      img{
        margin: 34px;
      }
      .song-mask{
        position: absolute;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
        background-position: -140px -580px;
      }
    }
    .song-detai{
      width: 414px;
      padding-top: 5px;
      .song-name{
        font-size: 24px;
        display: flex;
        align-items: center;
        .song-icon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
          margin-right: 10px;
        }
      }
      .row{
        margin: 10px 0;
        color:#999 ;
        line-height: 16px;
        a{
          color: #0c73c2;
          &:hover{
            text-decoration: underline;
          }
        }
      }
      .song-operation{
        display: flex;
        a{
          text-decoration: none;
        }
          .btn-icon{
            margin-left: 10px;
            padding: 0 5px 0 0;
            background-position: right -1020px;
            &.collect-icon{
              i{
                background-position: 0 -977px;
                &:hover{
                  background-position:0 -1063px
                }
              }
            }
            &.shared-icon{
              i{
                background-position: 0 -1225px;
                &:hover{
                  background-position: 0 -1268px
                }
              }
            }
            &.downlod-icon{
              i{
                background-position: 0 -2761px;
                &:hover{
                  background-position: 0 -2805px;
                }
              }
            }
            &.comment-icon{
              i{
                background-position: 0 -1465px;
                &:hover{
                  background-position: 0 -1508px
                }
              }
            }
            &:hover{
              background-position:  right -1106px
            }
            i{
              display: inline-block;
              padding-right: 2px;
              padding-left: 28px;
              height: 31px;
              line-height: 30px;
              min-width: 23px;
              cursor: pointer;
            }

            
            
          }
          .add-list{
            display: inline-block;
            width: 31px;
            margin-left: -3px;
            padding-right: 0;
            background-position: 0 -1588px;
            &:hover{
              background-position: -40px -1588px
            }
          }
          .paly-btn{
            background-position: right -428px;
            color: white;
            display: flex;
            &:hover{
              background-position: right -510px;
              i{
                background-position: 0 -469px
              }
              em{
                background-position:-28px -1622px
              }
            }
            i{
              display: flex;
              align-items: center;
              padding: 0 7px 0 8px;
              background-position:0 -387px;
              height: 31px;
              line-height: 31px;
              span{
                text-decoration: none;
                display: inline-block;
                height: 30px;
                margin-bottom: 2px;
              }
            }
            em{
              display: inline-block;
              width: 20px;
              height: 18px;
              margin:0 2px 0 0;
              background-position: 0 -1622px;
            }
            
          }
      }
        }

    .lyric-content{
      margin-top: 40px;
      .lyric-row{
        margin: 10px 0;
      }
      span{
        cursor: pointer;
        color:#0c73c2;
        i{
          display: inline-block;
          width: 11px;
          height: 8px;
        }
      }
      .up{
        background-position: -45px -520px;
      }
      .down{
        background-position: -65px -520px
      }
    }   
`

export default SongInfoWrapper