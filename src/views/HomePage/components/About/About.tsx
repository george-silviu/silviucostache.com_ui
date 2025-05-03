/* eslint-disable react/no-unescaped-entities */
import { JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            component={'img'}
            loading="lazy"
            src="https://assets.maccarianagency.com/backgrounds/img51.png"
            width={1}
            height={1}
            maxWidth={400}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              What I Bring to the Table
            </Typography>
            <Typography data-aos={'fade-up'}>
              I’m a full-stack developer with 4 years of experience delivering
              clean, maintainable code and collaborating on diverse projects —
              from early MVPs to complex platforms. I combine technical
              execution with a deep understanding of product and business goals,
              making sure every line of code contributes to real value. I'm not
              just doing my job, I struggle to innovate and I'm constantly
              asking myself how can I deliver more value
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
