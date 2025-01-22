import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import { useGetAllPostsQuery } from '../../services/posts';
import { setPosts } from '../../redux/slices/posts';

import Post from '../../components/Post';
import Tags from '../../components/Tags';
import Comments from '../../components/Comments';
import Loader from '../../components/Loader';

const Home = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.auth.data)
  const { posts } = useSelector(state => state.posts)
  const { data, isLoading, isError, refetch } = useGetAllPostsQuery()
  const [activeTab, setActiveTab] = React.useState(1)

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  };

  React.useEffect(() => {
    dispatch(setPosts(data))
  }, [data, dispatch])

  React.useEffect(() => {
    refetch()
  }, [posts, refetch])

  return (
    <>
      <Tabs onChange={handleChange} value={activeTab}>
        <Tab label="Новые" value={1} />
        <Tab label="Популярные" value={2} />
      </Tabs>
      <Stack sx={{ width: "100%", gap: 4, mt: 3, display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 4 }}>
          {
            isLoading ?
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "60vh"
              }}>
                <Loader />
              </Box> :
              posts && posts.map((post) => {
                return <Post key={post._id} data={post} isEditable={userData?._id === post.user._id} />
              })
          }
        </Box>
        <Box sx={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
          <Tags />
          <Comments />
        </Box>
      </Stack>
    </>
  );
};

export default Home;