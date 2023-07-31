import styled from "styled-components";

const PlayListWrapper = styled.div`
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
`
export default PlayListWrapper