import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Post = () => {
  const img = "https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie1_2000x.jpg?v=1698881277"

  return (
    <Stack sx={{ bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%", height: "400px", overflow: "hidden",
          background: `url(${img}) center center no-repeat`,
          backgroundSize: "cover",
        }} />
      <Box sx={{ p: 2 }}>
        <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
          <img
            style={{ width: "50px", height: "50px", objectFit: "none", borderRadius: "50%" }}
            src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
          <Stack>
            <Typography>Name</Typography>
            <Box>12 june 2011</Box>
          </Stack>
        </Stack>
        <Stack sx={{ pl: 8, mt: 1 }}>
          <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>1999 Aged Hong Oolong Mao Xie</Typography>
          <Stack sx={{ color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 1 }}>
            <Typography>#tea</Typography>
            <Typography>#puer</Typography>
          </Stack>
          <Stack sx={{ mt: 2, color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
              <Typography>150</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <ChatBubbleIcon sx={{ fontSize: 20 }} />
              <Typography>2</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Post;