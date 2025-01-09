import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Post = ({ data }) => {
  const { _id, imageUrl, tags, title, user, viewsCount, createdAt } = data

  return (
    <Stack
      sx={{
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        transition: "all .1s ease-in-out",
        "&:hover": { scale: 1.01 }
      }}>
      <Box
        sx={{
          width: "100%", height: "400px", overflow: "hidden",
          background: `url(${imageUrl}) center center no-repeat`,
          backgroundSize: "cover",
        }} />
      <Box sx={{ p: 2 }}>
        <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
          <img
            style={{ width: "50px", height: "50px", objectFit: "none", borderRadius: "50%" }}
            src={user.avatarUrl} alt="user-avatar" />
          <Stack>
            <Typography>{user.fullName}</Typography>
            <Box>{(new Date(Date.parse(createdAt))).toLocaleDateString()}</Box>
          </Stack>
        </Stack>
        <Stack sx={{ pl: 8, mt: 1 }}>
          <Link
            to={`/posts/${_id}`}
            component={RouterLink}
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline", textDecorationColor: "#001" }
            }}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#001" }}>
              {title}
            </Typography>
          </Link>
          <Stack sx={{ color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 1 }}>
            {tags.map((tag, i) => <Typography key={i}>#{tag}</Typography>)}
          </Stack>
          <Stack sx={{ mt: 2, color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
              <Typography>{viewsCount}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <ChatBubbleIcon sx={{ fontSize: 20 }} />
              <Typography>2</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box >
    </Stack >
  );
};

export default Post;