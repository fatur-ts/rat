import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({anchorEl, handleClose, open, menuItems }) {
    
  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={handleClose}
            key={item.id}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
  )
}
