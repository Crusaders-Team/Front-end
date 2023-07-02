import React from "react";
import "./MyVideos.css";
import { Grid } from "@mui/material";
import VideoCard from "../../Components/MyVideosCard/MyVideosCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "../../Components/Navbar/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MyVideos() {
  return (
    <div>
      <Navbar
        SearchOption={true}
        TicketOption={false}
        CartOption={false}
        DrawerOption={false}
        AuthorizationOption={false}
      />
      <Grid container spacing={2} className="videos-container">
        <Grid item md={4} xs={12}>
          <VideoCard
            id={"id"}
            uploadTime={"UPLOAD TIME"}
            title={"TITLE"}
            description={"DES"}
            url={"URL"}
            tag={"TAG"}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoCard
            title={"TITLE"}
            description={"DES"}
            url={"URL"}
            tag={"TAG"}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoCard
            title={"TITLE"}
            description={"DES"}
            url={"URL"}
            tag={"TAG"}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoCard
            title={"TITLE"}
            description={"DES"}
            url={"URL"}
            tag={"TAG"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MyVideos;
