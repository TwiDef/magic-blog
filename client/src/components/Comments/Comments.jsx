import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Comments = () => {
  return (
    <Stack sx={{ bgcolor: "#ffffff", p: 2 }}>
      <Typography>Комментарии</Typography>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}>
          <img
            style={{ width: "40px", height: "40px", objectFit: "none", borderRadius: "50%" }}
            src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
          <Box sx={{ borderBottom: "1px solid #d7d7d7", pb: 1 }}>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Solmir</Typography>
            <Typography sx={{ fontSize: 15, color: "#484747" }}>loremsakhdjasdhashdkjhkjsa hdksjakjdkaj</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}>
          <img
            style={{ width: "40px", height: "40px", objectFit: "none", borderRadius: "50%" }}
            src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
          <Box sx={{ borderBottom: "1px solid #d7d7d7", pb: 1 }}>
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Galthran</Typography>
            <Typography sx={{ fontSize: 15, color: "#484747" }}>loremsaa shdkjhkjsa hdksjakjdkaj</Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Comments;