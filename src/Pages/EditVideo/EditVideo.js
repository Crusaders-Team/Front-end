import React from 'react'
import './EditVideo.css'
import { Typography, Paper, Box, TextField, Grid } from '@mui/material';
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { Button, Input } from "@mui/material";

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

const names = [
  'Funny',
  'Review',
  'Vlog',
  'Fitness',
  'Education',
  'Technology',
  'Tutorial',
  'Music',
  'Travel',
  'Beauty',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function EditVideo() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleVideoClick = () => {
    document.getElementById("video-file").click();
  };

  const handleImageChange = (event) => {
    if (event.target.files.length) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleImageClick = () => {
    document.getElementById("image-file").click();
  };

  const handleChipChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          "& > :not(style)": {
            pb: 5,
            m: 1,
            mt: 5,
            width: "60vw",
          },
        }}
      >
        <Paper
          sx={{ borderRadius: "20px", backgroundColor: "#c4d4f4" }}
          elevation={3}
        >
          <Typography
            variant="h1"
            component="h2"
            fontWeight="bold"
            color="#1b1858"
            sx={{ m: 4 }}
          >
            Edit Video
          </Typography>
          <TextField
            className="name-textfield"
            sx={{ m: 4 }}
            required
            id="filled-required"
            label="Video Name"
            defaultValue=""
            variant="filled"
          />

          <FormControl sx={{ m: 4, width: "60%" }}>
            <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChipChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            sx={{ m: 4, width: "90%" }}
            id="filled-multiline-static"
            label="Description"
            multiline
            rows={8}
            defaultValue=""
            variant="filled"
          />
          <Grid sx={{ display: "flex", mt: 3 }}>
            {/* <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              color="#1b1858"
              sx={{ ml: 4 }}
            >
              Choose cover of the video
            </Typography> */}

            <Input
              id="image-file"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Button
              className="submit_button"
              variant="contained"
              onClick={handleImageClick}
            >
              {imageFile && <p>{imageFile.name}</p>}
              {imageFile === null && <p>Choose Cover Image</p>}
            </Button>

            {/* <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              color="#1b1858"
              sx={{ ml: 4 }}
            >
              Choose the video
            </Typography> */}

            <Input
              id="video-file"
              type="file"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleVideoChange}
            />
            <Button
              className="submit_button"
              variant="contained"
              onClick={handleVideoClick}
            >
              {videoFile && <p>{videoFile.name}</p>}
              {videoFile === null && <p>Choose Video File</p>}
            </Button>
            <Button className="submit_button" variant="contained">
              SAVE
            </Button>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default EditVideo
