import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const Registration = () => {
  return (
    <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ width: "40%", p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant='h5'>Создание аккаунта</Typography>
          <img
            style={{ marginTop: "20px" }}
            width={150}
            height={150}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />
          <TextField
            sx={{ width: "80%", mt: 4 }}
            label="Полное имя"
            multiline
          />
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
            Зарегистрироваться
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Registration;