import React from 'react'
import './EditProfile.css'
import { Typography, Paper, Box, TextField } from '@mui/material';
import { Theme, useTheme } from "@mui/material/styles";
import Navbar from '../../Components/Navbar/Navbar';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function EditProfile() {
    return (
    <div>
        <Navbar
        SearchOption={true}
        TicketOption={false}
        CartOption={false}
        DrawerOption={false}
        AuthorizationOption={true}
        />
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          "& > :not(style)": {
            m: 1,
            mt: 5,
            width: "60vw",
            height: "90vh",
          },
        }}
        >
        <Paper
          sx={{ borderRadius: "20px", backgroundColor: "#c4d4f4", margin_top: '60px' }}
          elevation={3}
        >
          <Typography
            variant="h1"
            component="h2"
            fontWeight="bold"
            color="#1b1858"
            sx={{ m: 4 }}
          >
            Edit Profile
          </Typography>
          <TextField
            className="name-textfield"
            sx={{ ml: 4, mt: 4 }}
            required
            id="filled-required"
            label="Username"
            defaultValue=""
            variant="filled"
          />
            <TextField
            className="name-textfield"
            sx={{ m: 4 }}
            required
            id="filled-required"
            label="Username"
            defaultValue=""
            variant="filled"
          />
          
        </Paper>
      </Box>
    </div>
  );
}

export default EditProfile
