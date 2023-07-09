

import { memo } from 'react';
import {renderRoutes} from 'react-router-config'
import { Provider } from "react-redux";
import {HashRouter} from 'react-router-dom'

import store from '@/store'
import routes from './router';

import HHAppFooter from './components/app-footer';
import HHAppHeader from './components/app-header';
import PlayerBar from './pages/player/app-player-bar';



export default  memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        <HHAppHeader/>
          {renderRoutes(routes)}
        <HHAppFooter/>
        <PlayerBar />
      </HashRouter>
    </Provider>
  );
})


