import Discover from "../pages/discover"
import Friend from "../pages/friend"
import Mine from "../pages/mine"

import Recommend from "../pages/discover/child-pages/recommend";
import Ranking from "../pages/discover/child-pages/ranking";
import Songs from "../pages/discover/child-pages/songs";
import Djradio from "../pages/discover/child-pages/djradio";
import Artist from "../pages/discover/child-pages/artist";
import Album from "../pages/discover/child-pages/album";
import Player from "../pages/player";


import { Navigate  } from "react-router-dom";


const routes = [
  {
    path:'/', 
    exact:true,
    element: <Navigate  to="/discover"></Navigate>
  },
  {
    path:'/discover', 
    element: <Discover></Discover>,
    children:[
      {
        path:'/discover',
        exact:true,
        element:<Navigate  to='/discover/recommend' ></Navigate>
      },
      {
        path:'/discover/recommend',
        element:<Recommend></Recommend>
      },
      {
        path:'/discover/ranking',
        element: <Ranking></Ranking>
      },
      {
        path:'/discover/songs',
        element:  <Songs></Songs>
      },
      {
        path:'/discover/djradio',
        element: <Djradio></Djradio>
      },
      {
        path:'/discover/artist',
        element: <Artist></Artist>
      },
      {
        path:'/discover/album',
        element: <Album></Album>
      },
      {
        path:'/discover/player',
        element: <Player></Player>
      }
    ]
  },
  {
    path:'/friend', 
    element:  <Friend></Friend>
  },
  {
    path:'/mine', 
    element: <Mine></Mine>
  }
]

export default routes