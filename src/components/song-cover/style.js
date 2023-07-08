import styled from "styled-components";

const SongCoverWrapper = styled.div`
   width: 140px;
  .cover{
    position: relative;
    img{
      width: 100%;
      height:100%;
    }
    .mask{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position:0 0
    }
    .bottom{
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     height: 27px;
     background-position: 0 -537px;
     color: #ccc;
     display: flex;
     align-items: center;
     .icon-headset{
      display: inline-block;
      width: 14px;
      height: 11px;
      background-position: 0 -24px;
      margin: 0 5px 0 10px;
     }
     .play-count{

     }
     .icon-play {
      cursor: pointer;
      position: absolute;
      display: inline-block;
      right: 10px;
      bottom: 5px;
      width: 16px;
      height: 17px;
      background-position: 0 0;
     }
    }
  }
  .description{
    margin: 8px 0 3px;
    font-size: 14px;
  }
`
export default SongCoverWrapper