import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, Button, Container } from '@mui/material';
import './Home.css';

export default function Admin() {
  const sidebarLinks = [
    { label: 'View', path: './StudentList1' },
    // Add more links as needed
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
          <h1 style={{fontFamily:'cursive',fontSize:'50px'}}>        STUDENT GRADE BOOK SYSTEM</h1>

    <Container component="main" maxWidth="sm" className='admin-container'>
      <div >
        <List>{listItems}</List>
      </div>
    </Container>
          </div>

  );
}
