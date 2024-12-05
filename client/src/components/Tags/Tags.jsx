import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

const Tags = () => {
  return (
    <Stack sx={{ bgcolor: "#ffffff", p: 2 }}>
      <Typography>Тэги</Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 1, color: "#6e6e6e" }}>
        <TagIcon />
        <Typography>tea</Typography>
      </Box>
      <Box sx={{ mt: 2, display: "flex", gap: 1, color: "#6e6e6e" }}>
        <TagIcon />
        <Typography>puer</Typography>
      </Box>
    </Stack>
  );
};

export default Tags;