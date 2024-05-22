import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real-world scenario, this logic would involve making an API call to the server for authentication
    // For simplicity, let's use local storage to simulate authentication
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      // Simulate successful login
      alert('Login successful!');
      
      // Redirect to the admin page
      navigate('/admin');
    } else {
      // Handle invalid credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login'>
    <Container  component="main" maxWidth="xs" style={{ backgroundColor: 'lavender', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" style={{ marginBottom: '20px',color:'black' }}>Login</Typography>
        <form style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <br/>
          <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
            Login
          </Button>
        </form>
        <p style={{ marginTop: '20px' ,color:'black'}}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </Container>
    </div>
  );
};

export default Login;
