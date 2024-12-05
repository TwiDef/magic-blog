import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{
        maxWidth: "1080px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Typography variant="h6" component="div">magic-blog-app</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ bgcolor: "#123c8f", color: "#fff" }} >Войти</Button>
          <Button sx={{ bgcolor: "#7f0924", color: "#fff" }}>Создать аккаунт</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;