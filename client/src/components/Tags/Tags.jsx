import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { useGetLastTagsQuery } from '../../services/posts';
import Loader from '../Loader';

const Tags = () => {

  const { data, isLoading, isError } = useGetLastTagsQuery()

  if (isLoading) {
    return (
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#ffffff",
        p: 6
      }}>
        <Loader />
      </Box>)
  }

  return (
    <Stack sx={{ bgcolor: "#ffffff", p: 2 }}>
      <Typography>Тэги</Typography>
      {data && data.map((tag, i) => {
        return (
          <Box key={i} sx={{ mt: 2, display: "flex", gap: 1, color: "#6e6e6e" }}>
            <TagIcon />
            <Typography>{tag}</Typography>
          </Box>
        )
      })}
    </Stack>
  );
};

export default Tags;