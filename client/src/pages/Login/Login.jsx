import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ width: "40%", p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant='h5'>Вход в аккаунт</Typography>
          <TextField
            sx={{ width: "80%", mt: 4 }}
            label="E-mail"
            multiline
          />
          <TextField
            sx={{ width: "80%", mt: 4 }}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            sx={{ p: "6px 40px", mt: 4, bgcolor: "#123c8f", color: "#fff" }}
            variant="text">
            Войти
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;