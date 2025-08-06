import type { FC } from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import Footer from '../components/Footer';
import { Outlet } from "react-router";

export const MainLayout: FC = () => {

  return (
    <>
      <AppAppBar />
      <Box
        id="hero"
        sx={{
          width: '100%',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 12, sm: 16 },
            pb: { xs: 4, sm: 5 },
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <div>
        <Divider />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;