import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const FullPost = () => {
  const img = "https://the-chinese-tea-company.com/cdn/shop/files/1999LaoCongMaoXie1_2000x.jpg?v=1698881277"

  return (
    <>
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
            <Typography sx={{ mt: 2, mb: 2 }}>
              1999 Aged Hong Oolong Mao Xie is a rare finding and one-off batch of aged oolong tea.  This tea was made into almost like a black tea with the highest oxidised of all oolong teas, though following oolong processing techniques. It's also known as Hong Oolong. The tea was produced in a very traditional methods, fully hand-processed and wood-charcoal baked at very low heat for several days. It has been naturally stored since 1999.
              Mao Xie (毛蟹茶), translated as "Hairy Crab", is one of famous cultivar for making oolong teas in Anxi County of the Chinese province Fujian. The name is due to the fine downy hair that can be found on the young leaves, the deep serrations and neat edge of the leaves, like the shell of a Chinese mitten crab.
            </Typography>
            <Stack sx={{ color: "#6e6e6e", display: "flex", flexDirection: "row", gap: 3 }}>
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