import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Home, PageNotFound, CadastroDeCategoria, CadastroVideo,
} from './Pages/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroDeCategoria} />
      <Route path="/" exact component={Home} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
