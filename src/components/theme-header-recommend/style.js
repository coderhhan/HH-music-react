import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 32px;
    padding: 0 10px 0 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    .left{
       display: flex;
      .title{
        display: inline-block;
        margin-bottom: 4px;
        font-size: 20px;
        text-decoration: none;
      }
      .keywords{
        font-size: 12px;
         margin: 6px 0 0 20px;
        .keyword-item{
          cursor: pointer;
          color: #666;
        }
      }
    }

    .right{
      display: flex;
      align-items: center;
      a{
        font-size: 12px;
      }
      .more{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background-position: 0 -240px;
      }
    }
`