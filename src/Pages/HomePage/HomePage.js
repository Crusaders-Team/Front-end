import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Grid } from "@mui/material";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import api from "../../api";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'None',
  padding: theme.spacing(1),
  textAlign: "center",
  color: 'None',
}));

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get('/videos/')
      .then(response => {
        setVideos(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar
        SearchOption={true}
        TicketOption={false}
        CartOption={false}
        DrawerOption={false}
        AuthorizationOption={true}
      />
      <Header/>
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

export default HomePage;
