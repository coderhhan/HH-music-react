import styled from 'styled-components'

const HHAppHeaderWrapper = styled.div`
  height:70px;
  background-color:#242424;
  .content{
    height:70px;
    
    display:flex;
    justify-content: space-between;
  }
  .divider{
    height:5px;
    background-color:#C20C0C;
    border-bottom: 1px solid #a40011;
  }
`

const LeftWrapper = styled.div`
   display: flex;
  .logo{
    display: block;
    width: 157px;
    padding-right: 20px;
    height: 69px;
    background-position: 0 0 ;
    text-indent:-999px
  }

  .menu-list{
    display: flex;
    align-items: center;
    a{
      font-size: 14px;
      display: block;
      padding: 0 19px;
      text-decoration: none;
      cursor: pointer;
      line-height: 70px;
      position: relative;
      &:hover,&.active{
        background-color: black;
        color: white;
      }

      &.active .icon{
        position: absolute;
        width: 12px;
        height: 7px;
        left: 50%;
        top: 64px;
        margin-left: -6px;
        background-position: -226px 0;
      }
    }
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  .search-input{
    width: 158px;
    border-radius: 16px;
    border: none;
    input{
      &::placeholder{
        font-size: 12px;
      }
    }
  }

  .center-btn{
    margin-left: 12px;
    margin-right: 20px;
    width: 90px;
    height: 32px;
    border:1px solid #4F4F4F;
    color: #ccc;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    &:hover{
       border-color:white;
       color: white;
    }
  }

  .login-btn{
    font-size: 12px;
    color: #787878;
    cursor: pointer;
    &:hover{
      color: #999;
    }
  }
`
export  {
  LeftWrapper,
  RightWrapper,
  HHAppHeaderWrapper
}