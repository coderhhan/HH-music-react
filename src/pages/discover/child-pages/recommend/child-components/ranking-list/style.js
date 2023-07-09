import styled from "styled-components";

export const RankingListWrapper =styled.div`

    .content{
      margin-top: 20px;
      display: flex;
      padding-left: 1px;
      .list-column{
        width: 230px;
        .list-top{
          height: 100px;
          padding: 20px 0 0 19px;
          display: flex;
          .img-box{
            width: 80px;
            height: 80px;
            position: relative;
            .mask{
              background-position: -145px -57px;
            }
            img{
              width: 100%;
              height:100%;
            }
          } 
          .title-box{
            margin: 6px 0 0 10px;
            width: 116px;
            font-size: 14px;
            .btn-box{
              margin-top: 10px;
              i{
               cursor: pointer;
               display: inline-block;
               margin-right: 10px;
               height:22px;
               width: 22px;
              }
              .play-btn{
                background-position: -267px -205px;
                &:hover{
                  background-position: -267px -235px;
                }
              }
              .collect-btn{
                background-position: -300px -205px;
                &:hover{
                  background-position: -300px -235px;
                }
              }
            }
          }
        }
        ol{
          height: 320px;
          margin-left: 50px;
          line-height: 32px;
        }
        li{
          display: flex;
          position: relative;
          .no{
            display: inline-block;
            width: 35px;
            height: 32px;
            margin-left: -35px;
            text-align: center;
            color: #666;
            font-size: 16px;
            &.no-top{
              color: #c10d0c;
            }
          }
          .name{
            display: inline-block;
            line-height: 32px;
            width: 170px;
            height: 32px;
            color: #000;
            flex: 1;
          }
          .opreation-btns{
            display: none;
            right: 0;
            height: 32px;
            width: 82px;
            
            .btn{
              cursor: pointer;
              display: inline-block;
              height: 17px;
              width: 17px;
            }
            .play-btn{
              margin-right: 10px;
              background-position: -267px -268px;
              &:hover{
                background-position: -267px -288px;
              }
            }
            .add-btn{
              background-position: 0 -700px;
              margin: 4px 6px 0 0;
              &:hover{
                background-position: -22px -700px;
              }
            }
            .collect-btn{
              margin-right: 10px;
              background-position: -297px -268px;
              &:hover{
                background-position: -297px -288px;
              }
            }
          }
          &:hover{
            & .opreation-btns{
              display: flex;
              align-items: center;
            }
          }
        }
        .more{
          line-height: 32px;
          height: 32px;
          text-align: right;
          margin-right: 32px;
          color:#000
        }
      }
    }

` 