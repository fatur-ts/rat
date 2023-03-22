import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Authentication from './pages/Authentication/Authentication1';
import Database from './pages/Database/Database';
import Function from './pages/Function/Function';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard/Dashboard';
//import { dashboardTheme } from './dashboardTheme';
const mdTheme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={mdTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Function />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

