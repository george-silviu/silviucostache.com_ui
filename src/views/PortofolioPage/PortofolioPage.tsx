import { JSX } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import { Hero, SearchBox, Projects } from './components';

const BlogReachView = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox />
        </Container>

        <Container>
          <Projects />
        </Container>

        <ContactForm />
      </Box>
    </Main>
  );
};

export default BlogReachView;
