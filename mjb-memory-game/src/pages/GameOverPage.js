import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

export default function GameOverPage({ userName, gameTime, onRestart }) {
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
          Game Over
        </Typography>
        <Typography variant="h4">
          Congratulations, {userName}!
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 3 }}>
          Your time: {gameTime} seconds
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: '50px' }}
          onClick={onRestart}
        >
          Restart
        </Button>
      </Paper>
    </Box>
  );
}
