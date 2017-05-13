import React from 'react';
import { Route } from 'react-router';

import App from './app.container';
import SearchRoute from './search';
import NotFoundRoute from './notFound';

const routes = (
  <Route>
    {SearchRoute}

    <Route path="404">
      {NotFoundRoute}
    </Route>
  </Route>
);

export default (
  <Route component={App}>
    <Route path="/">
      {routes}
    </Route>

    <Route path="*">
      {NotFoundRoute}
    </Route>
  </Route>
);
