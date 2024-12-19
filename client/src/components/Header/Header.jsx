import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false)

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
        <Link to="/" component={RouterLink}>
          <Typography sx={{ color: "#fff", fontSize: 24 }}>magic-blog-app</Typography>
        </Link>
        {isAuth ?

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link component={RouterLink} to="/posts/create">
              <Button sx={{ bgcolor: "#123c8f", color: "#fff" }}>Написать статью</Button>
            </Link>
            <Button sx={{ bgcolor: "#7f0924", color: "#fff" }}>Выйти</Button>
          </Box> :

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link component={RouterLink} to="/login">
              <Button sx={{ bgcolor: "#123c8f", color: "#fff" }}>Войти</Button>
            </Link>
            <Link component={RouterLink} to="/registration" >
              <Button sx={{ bgcolor: "#7f0924", color: "#fff" }}>Создать аккаунт</Button>
            </Link>
          </Box>

        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;