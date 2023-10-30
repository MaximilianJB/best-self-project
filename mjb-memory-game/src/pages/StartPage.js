import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function StartPage({ onStart, setUserName }) {
  const [name, setName] = useState('');

  const handleStart = () => {
    setUserName(name);
    onStart();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: 'center',
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h2" gutterBottom>
          MJB Memory Match
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: '50px' }}
          onClick={handleStart}
          disabled={!name}
        >
          Start Game
        </Button>
      </Paper>
    </Box>
  );
}
