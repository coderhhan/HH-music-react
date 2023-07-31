import React, { memo,useState,useEffect } from 'react'
import { useSearchParams,NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'


import SongInfoWrapper from './style'
import { getSizeImage } from '../../../../utils/format-utils'
import { getSongDetail,getLyric } from '../../../../services/player'
import { parseLyric } from '../../../../utils/format-lyric'
import { getSongDetailAction } from '../../store/actionCreators'

const SongInfo = memo(() => {
  const [song,setSong] = useState({})
  const [lyric,setLyric] = useState([])
  const [showLyric,setShowLyric] = useState(false)

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(typeof searchParams.get('id'))
    if(searchParams.has('id')) {
      const currentSongId = searchParams.get('id')*1
      loadCurrentSong(currentSongId)
      loadCurrentlyric(currentSongId)
    }
  },[searchParams])

  const loadCurrentSong = (id)=>{
    getSongDetail(id)
    .then(res=>{
      console.log(res.songs[0])
      setSong({
        ...res.songs[0]
      })
    })
  }

  const loadCurrentlyric= (id)=>{
    getLyric(id)
    .then(res=>{
      const lyric = parseLyric(res.lrc.lyric)
      setLyric([
        ...lyric.map(item=>item.content)
      ])
    })
  }
  return (
    <SongInfoWrapper>
      <div className='img-wrap'>
        <img src={getSizeImage(song.al &&song.al.picUrl,130)} alt="" />
        <span className='song-mask cover_icons'></span>
      </div>
      <div className='song-detai'> 
        <div className='song-name'><i className='song-icon opreation_icons'></i>{song.name}</div>
        <p className='row'>歌手：
        {
          song.ar && song.ar.map((item,index)=>(
            <span key={item.id}>
            <a href="#" >{item.name}</a><span>{index !== song.ar.length-1?'/':''}</span>
            </span>
          ))
        }
        </p>
        <p className='row'>所属专辑：
          <NavLink>
              {song.al && song.al.name}
          </NavLink>
        </p>
        <div className='song-operation'>
          <a href="javaScript:;" className='button2_sprite paly-btn' onClick={()=>{dispatch(getSongDetailAction(song.id))}}>
            <i  className='button2_sprite'>
              <em className='button2_sprite'/>
              <span>播放</span>
            </i>
          </a>
          <a href="javaScript:;" title='添加到播放列表' className='button2_sprite add-list'></a>
          <a href="javaScript:;" className='button2_sprite btn-icon collect-icon'><i className='button2_sprite'>收藏</i></a>
          <a href="javaScript:;" className='button2_sprite btn-icon shared-icon'><i className='button2_sprite'>分享</i></a>
          <a href="javaScript:;" className='button2_sprite btn-icon downlod-icon'><i className='button2_sprite'>下载</i></a>
          <a href="javaScript:;" className='button2_sprite btn-icon comment-icon'><i className='button2_sprite'>(2222)</i></a>
        </div>
        <div className='lyric-content'>
          {
            lyric.slice(0,12).map(item=>(
              <p className='lyric-row' key={item}>{item}</p>
            ))
          }
          {
            showLyric && lyric.slice(12).map(item=>(
              <p  className='lyric-row' key={item}>{item}</p>
            ))
          }
          <p onClick={()=>setShowLyric(!showLyric)}>
            {
              showLyric?<span>收起<i className='opreation_icons up'></i></span>:<span >展开<i className='opreation_icons down'></i></span>
            }
          </p>
        </div>
      </div>
    </SongInfoWrapper>
  )
})

export default SongInfo