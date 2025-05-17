import { JSX } from 'react';
import Main from 'layouts/Main';

import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Box from '@mui/material/Box';
import { Hero, About, Numbers, Projects } from './components';
import { useTheme } from '@mui/material/styles';

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main>
      <Hero />
      <Container>
        <About />
      </Container>
      <Container maxWidth={'800px !important'}>
        <Numbers />
      </Container>

      <Container>
        <Projects />
      </Container>

      <ContactForm />
    </Main>
  );
};

export default HomePage;
