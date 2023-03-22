import React from 'react';
import './App.css';
import MiniNavbar from './components/Navbar/MiniNavbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppTopbar from './components/AppTopbar/AppTopbar';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;
  return (
    <Grid container>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      <AppTopbar open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
      <MiniNavbar open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
      <Outlet />
      </Box>
    </Grid>
  );
}

export default App;
