import { Box, Container } from '@mui/material';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <Box sx={{ bgcolor: '#cfe8fc' }}>
      <Header />
      <Container fixed maxWidth="lg" sx={{ minHeight: "100vh", pt: 10 }} >
        <Home />
      </Container>
    </Box>
  );
}

export default App;
