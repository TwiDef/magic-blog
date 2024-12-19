import React from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import { useGetAllPostsQuery } from '../../services/posts';

import Post from '../../components/Post/Post';
import Tags from '../../components/Tags/Tags';
import Comments from '../../components/Comments/Comments';

const Home = () => {

  const { data, isLoading, isError } = useGetAllPostsQuery()

  const [activeTab, setActiveTab] = React.useState(1)
  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  };

  return (
    <>
      <Tabs onChange={handleChange} value={activeTab}>
        <Tab label="Новые" value={1} />
        <Tab label="Популярные" value={2} />
      </Tabs>
      <Stack sx={{ width: "100%", gap: 4, mt: 3, display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 4 }}>
          {
            data && data.map((post) => <Post key={post._id} data={post} />)
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