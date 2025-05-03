import { JSX } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Numbers = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 4,
            subtitle: 'Years of development experience',
          },
          {
            title: '5',
            subtitle: 'Projects contributed across multiple domains',
          },
          {
            title: '100%',
            subtitle: 'Client-focused commitment and quality',
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
