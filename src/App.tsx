import { Routes, Route } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import Home from './components/Home';
import MarsRoverPhotos from './components/marsRoverPhotos';
import FormValidation from './components/formValidation';
import LoadingAndErrors from './components/loadingAndErrors';
import MainLayout from './layouts/MainLayout';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="marsRoverPhotos" element={<MarsRoverPhotos />} />
          <Route path="formValidation" element={<FormValidation />} />
          <Route path="loadingAndErrors" element={<LoadingAndErrors />} />
        </Route>
      </Routes>
    </AppTheme>
  );
}
