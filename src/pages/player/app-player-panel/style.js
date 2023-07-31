import styled from "styled-components";

const AppPlayerPanelWrapper = styled.div`
  left: 50%;
  bottom: 46px;
  margin-left: -493px;
  position: absolute;
  width: 986px;
  overflow: hidden;
  
 .palylist-content{
    height: 260px;
    display: flex;
    background-position:-1014px 0;
    background-repeat: repeat-y;
    position: relative;
    img{
      top:40px;
      width: 980px;
      position: absolute;
      opacity: .2;
      filter: blur(10px);
    }
   
   
    .flag-content{
      position: absolute;
      width: 6px;
      height: 260px;
      background: #000;
      left: 555px;
      top: 0;
      z-index: 4;
    }
  }

`

export default AppPlayerPanelWrapper