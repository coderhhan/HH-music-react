

import { memo } from 'react';
import {renderRoutes} from 'react-router-config'


import routes from './router';

import HHAppFooter from './components/app-footer';
import HHAppHeader from './components/app-header';
import {HashRouter} from 'react-router-dom'

export default  memo(function App() {
  return (
    
    <HashRouter className="App">
      <HHAppHeader/>
      {renderRoutes(routes)}
     <HHAppFooter/>
    </HashRouter>
  );
})


