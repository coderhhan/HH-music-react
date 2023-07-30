import request from './axios';
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner 接口文档
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getSongUrl(params) {
  return request({
    url: "/song/url/v1", ///song/url/v1?id=33894312&level=exhigh
    params
  })
}


export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}
