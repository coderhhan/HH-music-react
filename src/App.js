

import { memo } from 'react';
import { Provider } from "react-redux";
import {HashRouter,useRoutes} from 'react-router-dom'

import store from '@/store'
import routes from './router';

import HHAppFooter from './components/app-footer';
import HHAppHeader from './components/app-header';
import PlayerBar from './pages/player/app-player-bar';



export default  memo(function App() {
  const data =   useRoutes(routes)
  console.log(data)
  return (
    <Provider store={store}>
        <HHAppHeader/>
          {useRoutes(routes)}
          {/* {data} */}
        <HHAppFooter/>
        <PlayerBar />
    </Provider>
  );
})


