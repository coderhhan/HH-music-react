import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  .album-image{
    width: ${props => props.size};
    height:  ${props => props.size};
    margin-bottom: 7px;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 118px;
      height: ${props => props.size};
      text-indent: -9999px;
      background-position: 0 ${props => props.bgpositiony};
    }
  }
  .album-info{
    font-size: 12px;
    .name{
      width: 90%;
      a{
        color: #000;
      }
    }
    .artist{
      width: 90%;
      color: #666;
    }
  }
  

`