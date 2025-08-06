import { Routes, Route } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import Home from './components/Home';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import MainLayout from './layouts/MainLayout';

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sample1" element={<Sample1 />} />
          <Route path="sample2" element={<Sample2 />} />
        </Route>
      </Routes>
    </AppTheme>
  );
}
