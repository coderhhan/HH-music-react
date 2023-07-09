import React, { memo, useEffect } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { getSongDetailAction } from './store/actionCreators'


import PlayerWrapper from './style'

const Player = memo(() => {
  const {currentSong } = useSelector((state)=>{
    return {
      currentSong:state.getIn(['player','currentSong'])
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getSongDetailAction(167876))
  },[dispatch])

  return (
    <PlayerWrapper>
      <div className='wrap-v2'>
        
      </div>
    </PlayerWrapper>
  )
})

export default Player