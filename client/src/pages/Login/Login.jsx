import React from 'react';
import { Box, Paper, TextField, Typography, Button, FormControl } from '@mui/material';
import { useGetUserDataMutation } from '../../services/auth';

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [getUserData, { data, error, isLoading }] = useGetUserDataMutation()
  const getUserDataHandler = (data) => getUserData(data)

  const onLogin = (email, password) => {
    if (email && password) {
      getUserDataHandler({ email, password })
    }
  }

  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ width: "40%", p: 4 }}>
        <FormControl sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant='h5'>Вход в аккаунт</Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            sx={{ width: "80%", mt: 4 }}
            label="E-mail"
            multiline
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            sx={{ width: "80%", mt: 4 }}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            onClick={() => onLogin(email, password)}
            sx={{ p: "6px 40px", mt: 4, bgcolor: "#123c8f", color: "#fff" }}
            variant="text">
            Войти
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Login;