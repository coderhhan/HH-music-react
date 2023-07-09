import styled from "styled-components";

export const NewAlbumWrapper =styled.div` 
 
  .content{
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .arrow{
      cursor: pointer;
      position: absolute;
      width: 17px;
      height: 17px;
    }
    .arrow-left{
      left: 2px;
      top: 71px;
      background-position: -260px -75px;
    }
    .arrow-right{
      right: 4px;
      top: 71px;
      background-position: -300px -75px;
    }
    .album{
      width: 640px;
      height: 150px;
      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

    }
  }
  .album-list{
    width: 640px;
    height: 150px;
    display: flex !important;
    justify-content: space-between;
    .album-item{
      margin-left: 10px!important;
    }
  }
` 