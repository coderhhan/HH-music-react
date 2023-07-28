import styled from "styled-components";

const MyInfoWrapper = styled.div`

.no-login{
  background-position: 0 0;
  box-sizing: border-box;
  padding: 20px;
  height: 126px;
  p{
    padding-bottom: 16px;
    line-height: 22px;
  }
  .login-btn{
    margin: 0 auto;
    background-position: 0 -195px;
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    &:hover{
      text-decoration: none;
      background-position: -110px -195px
    }
  }
}

`

export default MyInfoWrapper