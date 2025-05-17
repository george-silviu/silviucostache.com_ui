import { JSX } from 'react';

import { Box, Typography, Grid } from '@mui/material';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';

import Pagination from '@mui/material/Pagination';

import Content from './components/Content';
import ContactForm from 'components/ContactForm';

const ProjectView = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main>
      <Box marginTop={5}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Claim2Me
        </Typography>
      </Box>

      <Container>
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          borderRadius={3}
          maxHeight={{ xs: 300, sm: 400, md: 620 }}
          src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
          sx={{
            objectFit: 'cover',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
          }}
          alt="..."
        ></Box>
        <Grid item container justifyContent={'center'} xs={12}>
          <Pagination count={10} size={'large'} color="primary" />
        </Grid>
      </Container>

      <Container>
        <Content />
      </Container>

      <ContactForm />
    </Main>
  );
};

export default ProjectView;
