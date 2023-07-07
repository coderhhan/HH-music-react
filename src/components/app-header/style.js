import styled from 'styled-components'

const HHAppHeaderWrapper = styled.div`
  height:70px;
  background-color:black;
  .content{
    height:70px;
    background-color:blue;
    
    display:flex;
    justify-content: space-between;
  }
  .divider{
    height:5px;
    background-color:red
  }
`

const LeftWrapper = styled.div`
  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0 ;
  }
`

const RightWrapper = styled.div`
`
export  {
  LeftWrapper,
  RightWrapper,
  HHAppHeaderWrapper
}