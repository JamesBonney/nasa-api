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
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
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