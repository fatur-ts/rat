import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Function from './pages/Function/Function';
import Hosting from './pages/Hosting/Hosting';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Function />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

