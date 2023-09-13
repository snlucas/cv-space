import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import UtilNumberInput from '../utils/UtilNumberInput';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function TechSkillsSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="skillName"
                //   required
                  fullWidth
                  id="skillName"
                  label="Skill name"
                  autoFocus
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                //   required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                {/* <TextField
                //   required
                  fullWidth
                  id="yearsOfExperienceWithSkill"
                  label="Years of experience working with the skill"
                  name="yearsOfExperienceWithSkill"
                //   autoComplete="email"
                /> */}
                <UtilNumberInput
                  label="Years of experience with the skill"
                  placeholder="Years of experience with the skill"
                />
                
              </Grid>
              {/* <Grid item xs={12}>
                
                />
                
              </Grid>
              {/*<TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="fieldOfStudy"
                //   required
                  fullWidth
                  id="fieldOfStudy"
                  label="Field of study"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="startDate"
                //   required
                  fullWidth
                  id="startDate"
                  label="Start date"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="endDate"
                //   required
                  fullWidth
                  id="endDate"
                  label="End date (or expected)"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="grade"
                //   required
                  fullWidth
                  id="grade"
                  label="Grade"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="activitiesAndSocieties"
                //   required
                  fullWidth
                  id="activitiesAndSocieties"
                  label="Activities and societies"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                //   autoComplete="given-name"
                  name="description"
                //   required
                  fullWidth
                  id="description"
                  label="Description"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}