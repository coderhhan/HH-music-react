import styled from "styled-components";

const PanelHeaderWrapper = styled.div`
    height: 40px;
    background-position:0 0;
    color: white;
    display: flex;
    .header-left{
      box-sizing: border-box;
      padding: 0 20px 0 30px;
      height: 100%;
      width: 553px;
      display: flex;
      color: white;
      align-items: center;
      justify-content: space-between;
      a{
        color: #ccc;
        &:hover{
          color: white;
        }
      }
    }
    .header-right{
      font-size: 14px;
      font-weight: bold;
      width: 420px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

export default PanelHeaderWrapper