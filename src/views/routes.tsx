import { JSX } from 'react';

import { HomePage as HomePageView } from 'views';
import { PortofolioPage as PortofolioPageView } from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <HomePageView {...params} />,
  },
  {
    path: '/portofolio',
    renderer: (params = {}): JSX.Element => <PortofolioPageView {...params} />,
  },
];

export default routes;
