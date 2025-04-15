import { JSX } from 'react';

import { PortfolioMasonry as PortfolioMasonryView } from 'views';
import { HomePage as HomePageView } from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): JSX.Element => <HomePageView {...params} />,
  },
  {
    path: '/test',
    renderer: (params = {}): JSX.Element => (
      <PortfolioMasonryView {...params} />
    ),
  },
];

export default routes;
