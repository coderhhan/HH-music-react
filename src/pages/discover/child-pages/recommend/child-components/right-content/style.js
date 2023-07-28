import { styled } from "styled-components";

const RightContentWrapper =styled.div`

.box-1{
    padding: 20px;
  .head-row{
     display: flex;
     height: 23px;
     justify-content: space-between;
     align-items: flex-start;
     border-bottom: 1px solid #ccc;
     .more-btn{
      font-weight: normal;
     }
  }

  ul{
    margin-top: 6px;
    &>li{
      margin-top: 14px;
      cursor: pointer;
      
      &.bg{
        background: #fafafa;
      } 
      &.list-item{
        a{
          display: flex;
          text-decoration: none;
          &:hover{
            background: #f4f4f4;
          }
          .left-content{

          }
          .right-content{
            flex: 1;
            display: flex;
            min-width: 0;
            flex-direction: column;
            justify-content: center;
            padding-left: 14px;
            &.border{
              border: 1px solid #e9e9e9;
            }
            .h-name{
              .name{
              }
            }
            .p-desc{
              margin-top: 8px;
              .desc{
                color: #666;
              }
            }
          } 
        }
      }
    }
  }

  .btn-to-recruit{
    margin-top: 14px;
    border-radius: 4px;
    background-position: right -100px;
    font-weight: bold;
    display: inline-block;
    padding: 0 5px 0 0;
    &:hover{
      color: #333;
      background-position: right -182px;
    }
    i{
      display: inline-block;
      width: 170px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      padding: 0 15px 0 20px;
      background-position: 0 -59px;
      &:hover{
        color: #333;
        background-position: 0 -141px;
      }
    }
  }

  &.popular{
    ul>li{
      a:hover{
        background: transparent;
      }
    }
  }
}


`

export default RightContentWrapper