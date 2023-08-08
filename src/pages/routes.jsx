import { useRoutes } from 'react-router-dom';
import HomePage from './Home';
import React from 'react';

const lazyLoad = (loadedModule) =>
  React.lazy(() =>
    loadedModule().catch((err) => {
      if (err.message && /Loading chunk [\d]+ failed/.test(err.message)) {
        return { default: ServerErrorPage };
      }
      return err;
    }),
  );

const ShowcasesPage = lazyLoad(() => import('./Showcases'));
const AboutPage = lazyLoad(() => import('./AboutMe'));

const routersMap = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/showcases',
    element: <ShowcasesPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
];

export const Routes = () => useRoutes(routersMap);
