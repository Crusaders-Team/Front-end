import {React, useState} from 'react'
import './EditProfile.css'
import { Typography, Paper, Box, TextField, Grid, Input, Button } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import api from '../../api';

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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
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
  const [coverImage, setCoverImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [VideoTags, setVideoTags] = useState('');
  const [error, setError] = useState(null);
  const handleImageClick = () => {
    document.getElementById("image-file").click();
  };
  const handleVideoClick = () => {
    document.getElementById("video-file").click();
  };
  const handleCreateSubmit = async () => {
    if (
        !title ||
        !description ||
        !VideoTags ||
        !coverImage ||
        !video
    ) {
        setError('Please fill all the required fields.');
        return;
    }

    try {
        const response = await createFactory(
            title,
            description,
            // VideoTags,
            coverImage,
            video)
    } catch (error) {
        setError(error.response.data.message)
    }
  };
  const createFactory = async (title, description, VideoTags, coverImage, video) => {
    try {
        const createData = {
            'title': title,
            'description': description,
            'VideoTags': VideoTags,
            'coverImage': coverImage,
            'video': video,
        }
        const response = await api.post('/videos', createData)
            .then((res) => {
                // setError(res.data.message)
                window.location.reload();
            })
    } catch (error) {
      console.log(error)
        setError(error.response.data.message)
    }
  };
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          "& > :not(style)": {
            pb: 5,
            m: 1,
            mt: 10,
            width: "60vw",
          },
        }}
      >
        <Paper
          sx={{ borderRadius: "20px", backgroundColor: "#babae6" }}
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
            sx={{ m: 4 }}
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
            label="Email"
            defaultValue=""
            variant="filled"
          />
          <TextField
            className="name-textfield"
            sx={{ m: 4 }}
            required
            id="filled-required"
            label="Password"
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
            />
            <Button
              className="submit_button"
              variant="contained"
              onClick={handleImageClick}
            >
              {coverImage && <p>{coverImage.name}</p>}
              {coverImage === null && <p>Choose Avatar</p>}
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
            <Button
              className="submit_button"
              variant="contained"
              onClick={handleCreateSubmit}
            >
              SAVE
            </Button>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default EditVideo