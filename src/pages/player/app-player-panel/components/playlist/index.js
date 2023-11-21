import React, { memo } from 'react'
import PlayListWrapper from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSongDetailAction } from '../../../store/actionCreators'
import { formatMinuteSecond } from '../../../../../utils/format-utils'
import { NavLink } from 'react-router-dom'

const PlayList = memo(() => {

  const { playList, currentSong } = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  //播放列表切换音乐
  const playSong = (e, id) => {
    e.stopPropagation()
    dispatch(getSongDetailAction(id))
  }

  return (
    <PlayListWrapper>
      <ul className='list'>
        {
          playList && playList.map((song, index) => (
            <li className={['list-item', currentSong.id === song.id ? 'active' : ''].join(' ')} key={song.id} onClick={(e) => playSong(e, song.id)}>
              <div className='col col-1'><i className='playlist_sprite'></i></div>
              <div className='col col-2'>{song.name}</div>
              <div className='col col-3'></div>
              <div className='col col-4 tohide'>
                <NavLink to={`/artist?id=${song.id}`} title={song.ar.map(item => item.name).join(',')}>
                  {song.ar.map(item => item.name).join(',')}
                </NavLink>
              </div>
              <div className='col col-5'>{formatMinuteSecond(song.dt)}</div>
              <div className='col col-6'></div>
            </li>
          ))
        }
      </ul>
    </PlayListWrapper>
  )
})

export default PlayList