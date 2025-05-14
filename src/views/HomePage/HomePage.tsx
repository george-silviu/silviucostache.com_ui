import { JSX } from 'react';
import Main from 'layouts/Main';

import Container from 'components/Container';
import Box from '@mui/material/Box';
import { Hero, About, Numbers, Projects, Form } from './components';
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
      <Box
        sx={{
          borderRadius: 5,
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.paper} 100%)`,
        }}
      >
        <Container>
          <Form />
        </Container>
      </Box>
    </Main>
  );
};

export default HomePage;
