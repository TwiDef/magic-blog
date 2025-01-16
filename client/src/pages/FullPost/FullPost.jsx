import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../services/posts';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import Loader from '../../components/Loader';

const FullPost = () => {
  const history = useHistory()
  const isAuth = useSelector(selectIsAuth)
  const { id } = useParams()
  const { data, isLoading, isError } = useGetPostByIdQuery(id)

  React.useEffect(() => {
    !isAuth && history.push("/")
  }, [isAuth])

  if (isLoading) {
    return (
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "60vh"
      }}>
        <Loader />
      </Box>
    )
  }

  return (
    <>
      <Stack sx={{ bgcolor: "#ffffff", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%", height: "400px", overflow: "hidden",
            background: `url(${data && data.imageUrl}) center center no-repeat`,
            backgroundSize: "cover",
          }} />
        <Box sx={{ p: 2 }}>
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
              <Typography>{data && data.user?.fullName}</Typography>
              <Box>{data && (new Date(Date.parse(data.createdAt))).toLocaleDateString()}</Box>
            </Stack>
          </Stack>
          <Stack sx={{ pl: 8, mt: 1 }}>
            <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
              {data && data.title}
            </Typography>
            <Stack sx={{ color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 1 }}>
              {data && data.tags.toString().split(" ").map((tag, i) => <Typography key={i}>#{tag}</Typography>)}
            </Stack>
            <Typography sx={{ mt: 2, mb: 2 }}>{data && data.text}</Typography>
            <Stack sx={{ color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
                <Typography>{data && data.viewsCount}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <ChatBubbleIcon sx={{ fontSize: 20 }} />
                <Typography>2</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ mt: 2, p: 2, bgcolor: "#ffffff" }}>
        <Typography sx={{ fontWeight: "bold" }}>Комментарии</Typography>
        <Stack sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}>
            <img
              style={{ width: "40px", height: "40px", objectFit: "none", borderRadius: "50%" }}
              src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
            <Box sx={{ width: "100%", borderBottom: "1px solid #d7d7d7", pb: 1 }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Galthran</Typography>
              <Typography sx={{ fontSize: 15, color: "#484747" }}>loremsaa shdkjhk ksadj kaj skdjk ajskd</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}>
            <img
              style={{ width: "40px", height: "40px", objectFit: "none", borderRadius: "50%" }}
              src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
            <Box sx={{ width: "100%", borderBottom: "1px solid #d7d7d7", pb: 1 }}>
              <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>Galthran</Typography>
              <Typography sx={{ fontSize: 15, color: "#484747" }}>loremsaa shdkjhk ksadj kaj skdjk ajskd</Typography>
            </Box>
          </Box>
        </Stack>

        <Box sx={{ mt: 6, display: "flex", flexDirection: "row", gap: 1 }}>
          <img
            style={{ width: "40px", height: "40px", objectFit: "none", borderRadius: "50%" }}
            src="https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie_400x.jpg?v=1698881277" alt="user-avatar" />
          <Box sx={{ width: "100%", pb: 1 }}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Stack>
                <textarea
                  style={{ resize: "none", padding: "10px" }}
                  rows="4"
                  placeholder="Написать комментарии">
                </textarea>
                <Button
                  sx={{ mt: 1, maxWidth: 140 }}
                  variant="contained"
                  type="submit">Отправить</Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FullPost;