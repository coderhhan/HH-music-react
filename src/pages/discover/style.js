import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top{
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    
  }

`

export const ToMenuWrapper = styled.div`
   height: 35px;
   margin: auto;
   display: flex;
   ul{
     padding-left: 180px;
     display: flex;
     align-items: center;
     li{
      margin: 0 17px;
      cursor: pointer;
      a{
        display: inline-block;
        height: 21px;
        line-height: 21px;
        padding:0 13px;
        font-size: 12px;
        color: white;
        text-decoration: none;
        &:hover,&.active{
          background-color:#9B0909;
          border-radius: 20px;
        }
      }
     }
   }
`