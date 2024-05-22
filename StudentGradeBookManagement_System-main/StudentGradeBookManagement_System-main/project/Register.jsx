import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // In a real-world scenario, this logic would involve making an API call to the server for user registration
    // For simplicity, let's use local storage to simulate user registration
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);

    // Simulate successful registration
    alert('Registration successful!');
    
    // Redirect to the login page
    navigate('/admin/login');
  };

  return (
    <div className='register'>
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'lavender', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" style={{ marginBottom: '20px',color:'black' }}>Register</Typography>
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
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                type="tel"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
          <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
            Register
          </Button>
        </form>
        <p style={{ marginTop: '20px' ,color:'black'}}>
          Already have an account? <Link to="/admin/login">Login</Link>
        </p>
      </div>
    </Container>
    </div>
  );
};

export default Register;
