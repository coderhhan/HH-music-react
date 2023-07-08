

import { memo } from 'react';
import {renderRoutes} from 'react-router-config'
import { Provider } from "react-redux";

import store from '@/store'
import routes from './router';

import HHAppFooter from './components/app-footer';
import HHAppHeader from './components/app-header';
import {HashRouter} from 'react-router-dom'

export default  memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        <HHAppHeader/>
          {renderRoutes(routes)}
        <HHAppFooter/>
      </HashRouter>
    </Provider>
  );
})


