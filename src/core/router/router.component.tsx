import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { DashboardScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.dashboard]}
          component={DashboardScene}
        />
        <Route
          exact={true}
          path={switchRoutes.characterDetail}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
