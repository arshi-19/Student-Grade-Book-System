import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemButton, Container } from '@mui/material';
import './Home.css'
export default function Admin() {
  const sidebarLinks = [
    { label: 'Add Student', path: './AddStudent' },
    { label: 'Student List', path: './StudentList' },

    { label: 'Trash', path: './Trash' },
  ];
  
    

  const listItems = sidebarLinks.map((link, index) => (
    <ListItem key={index} disablePadding>
      <ListItemButton component={Link} to={link.path}>
        <Button variant="contained" color="primary" className='button'>
          {link.label}
        </Button>
      </ListItemButton>
    </ListItem>
  ));
  

  return (
    <div className='admin'>
    <h1 style={{fontFamily:'cursive',fontSize:'50px'}}>              STUDENT GRADE BOOK SYSTEM</h1>
      <Drawer 
        variant="permanent"
        sx={{
          
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor:'grey',
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>{listItems}</List>
      </Drawer>
    
    </div>
  );
}
