import React from 'react'
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems,secondNavbarItems } from './const/navbarItems';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import ListSubheader from '@mui/material/ListSubheader';
export default function MiniNavbar({open,toggleDrawer,drawerWidth}) {
  const navigate = useNavigate();
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
  return (
    <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainNavbarItems.map((item, index) => (
                <ListItem key={item.id}  disablePadding>
                <ListItemButton onClick={()=>navigate(item.route)}>
                    <ListItemIcon >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItemButton>
                </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
            Saved reports
            </ListSubheader>
            {secondNavbarItems.map((item2, index)=>(
                <ListItem key={item2.id}  disablePadding>
                <ListItemButton onClick={()=>navigate(item2.route)}>
                    <ListItemIcon>
                    {item2.icon}
                    </ListItemIcon>
                    <ListItemText primary={item2.label} />
                </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Drawer>
  )
}
