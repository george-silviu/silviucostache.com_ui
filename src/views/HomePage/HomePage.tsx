import { JSX } from 'react';
import Main from 'layouts/Main';

import Container from 'components/Container';
import { Hero, About, Numbers } from './components';

const HomePage = (): JSX.Element => {
  return (
    <Main>
      <Hero />
      <Container>
        <About />
      </Container>
      <Container maxWidth={'800px !important'}>
        <Numbers />
      </Container>
    </Main>
  );
};

export default HomePage;
