/* eslint-disable react/no-unescaped-entities */
import { JSX } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup.string().trim().required('Please specify your message'),
});

const ContactForm = (): JSX.Element => {
  const theme = useTheme();

  const initialValues = {
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        borderRadius: 5,
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container>
        <Box
          component={Card}
          maxWidth={700}
          margin={'0 auto'}
          boxShadow={4}
          padding={5}
        >
          <Box marginBottom={4}>
            <Typography
              variant={'h3'}
              sx={{ fontWeight: 700 }}
              align={'center'}
              gutterBottom
            >
              Let&apos;s{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: `${theme.palette.primary.main}`,
                  color: '#1B1F3B',
                  px: 1,
                  borderRadius: '4px',
                  display: 'inline-block',
                }}
              >
                build
              </Box>{' '}
              together!
            </Typography>
            <Typography color="text.secondary" align={'center'}>
              Do you have an idea and want to bring it to life using software,
              or maybe you just want to say "hi"👋? You can use the form bellow
              to contact me.
            </Typography>
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    sx={{ height: 54 }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    // @ts-ignore
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={6}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    name="message"
                    fullWidth
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    // @ts-ignore
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Grid item container justifyContent={'center'} xs={12}>
                  <Button
                    sx={{ height: 54, minWidth: 150 }}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
