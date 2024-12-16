import { Box, Container } from '@mui/material';

import Header from './components/Header';
import Home from './pages/Home';
import FullPost from './pages/FullPost';
import AddPost from './pages/AddPost';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <Box sx={{ bgcolor: '#cfe8fc' }}>
      <Header />
      <Container fixed maxWidth="lg" sx={{ minHeight: "100vh", pt: 10, pb: 2 }} >
        {/* <Home /> */}
        {/* <Login /> */}
        <Registration />
        {/* <FullPost /> */}
        {/* <AddPost /> */}
      </Container>
    </Box>
  );
}

export default App;
