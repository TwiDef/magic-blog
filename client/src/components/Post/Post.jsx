import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import { useDeletePostMutation } from '../../services/posts';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Post = ({ data, isEditable }) => {
  const { _id, imageUrl, tags, title, user, viewsCount, createdAt } = data
  const [deletePost, { _ }] = useDeletePostMutation()
  const deletePostHandler = (id) => deletePost(id)

  const onDeletePost = async () => {
    try {
      const status = await deletePostHandler({
        id: _id
      })
      if (status.data.success) {
        alert("Пост успешно удален")
      }

      if (!status.data.success) {
        alert(`${status.data.success}`)
      }

    } catch (error) {
      alert("Не удалось удалить пост")
      console.log(error)
    }
  }

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
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Box
              style={{
                width: "50px",
                height: "50px",
                overflow: "hidden",
                background: `url(${data && data.user.avatarUrl ?
                  data.user.avatarUrl :
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}) center center no-repeat`,
                backgroundSize: "cover",
                borderRadius: "50%"
              }}
              alt="user-avatar" />
            <Stack>
              <Typography>{user.fullName}</Typography>
              <Box>{(new Date(Date.parse(createdAt))).toLocaleDateString()}</Box>
            </Stack>
          </Stack>

          <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <IconButton
              onClick={onDeletePost}
              disabled={!isEditable}
              aria-label="delete">
              <CloseIcon fontSize="medium" sx={{ color: "#eb2831" }} />
            </IconButton>
            <IconButton
              disabled={!isEditable}
              aria-label="edit">
              <EditIcon fontSize="small" sx={{ color: "#0d42f9" }} />
            </IconButton>
          </Stack>
        </Box>

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
            {tags.toString().split(" ").map((tag, i) => <Typography key={i}>#{tag}</Typography>)}
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