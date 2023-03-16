
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AppTopbar from './components/AppTopbar/AppTopbar';

function App() {
  return (
    <Grid container>
      <AppTopbar/>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
