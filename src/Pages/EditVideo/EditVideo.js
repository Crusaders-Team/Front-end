import React from 'react'
import './EditVideo.css'
import { Typography, Paper, Box } from '@mui/material';

function EditVideo() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          "& > :not(style)": {
            m: 1,
            mt: 5,
            width: '60vw',
            height: '90vh',
          },
        }}
      >
        <Paper sx={{borderRadius: '20px'}} elevation={3}>
            <Typography>
                Edit Video
            </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default EditVideo
