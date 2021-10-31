import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  return (
    <Box sx={{bgcolor: '#f0f8ff', py: 8}}>
      <Container maxWidth="md">
        <GoogleLogin setLoginError={setLoginError}></GoogleLogin>
      </Container>
    </Box>
  );
};

export default Login;