import React from 'react';
import { privateRoutes, publicRoutes } from '@/app/routes';
import { Route, Routes } from 'react-router-dom';
import { RoutesParams } from '@/app/routes/router';
import { PrivateRoutes } from '@/app/routes/PrivateRoutes';

import '@/app/styles/App.scss';

export const App: React.FC = (): JSX.Element => {
  const auth = false;

  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes auth={auth} />}>
          {privateRoutes.map(({ id, path, Element }: RoutesParams) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        {publicRoutes.map(({ id, path, Element }: RoutesParams) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
};
