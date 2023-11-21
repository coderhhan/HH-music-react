import React, { memo, useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { scrollTo } from '../../../../../utils/format-lyric'
import LyriclistWrapper from './style'
const Lyriclist = memo(() => {

  const lyricRef = useRef()
  const { lyric, currentLyricIndex } = useSelector((state) => {
    return {
      lyric: state.getIn(['player', 'lyric']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }
  }, shallowEqual)

  useEffect(() => {
    if (currentLyricIndex >= 0 && currentLyricIndex <= 4) return;
    scrollTo(lyricRef.current, (currentLyricIndex - 5) * 30 + 40, 300)
  }, [currentLyricIndex]);

  return (
    <LyriclistWrapper ref={lyricRef}>
      {
        lyric && lyric.map((row, index) => (
          <p key={row.time} className={['lyric-row', currentLyricIndex === index ? 'active' : ''].join(' ')} >{row.content}</p>
        ))
      }
    </LyriclistWrapper>
  )
})

export default Lyriclist