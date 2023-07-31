import styled from "styled-components";

const LyriclistWrapper = styled.div`
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
`
export default LyriclistWrapper