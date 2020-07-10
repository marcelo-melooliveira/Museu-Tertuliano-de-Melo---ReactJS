import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from '../pages/HomePage'
import HistoricoCulturalPage from '../pages/HistoricoCulturalPage';
import PreColonialPage from '../pages/PreColonialPage';
import MeioAmbientePage from '../pages/MeioAmbientePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/historia-pre-colonial" component={PreColonialPage}/>
      <Route path="/historico-cultural" component={HistoricoCulturalPage}/>
      <Route path="/meio-ambiente" component={MeioAmbientePage}/>

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
}
