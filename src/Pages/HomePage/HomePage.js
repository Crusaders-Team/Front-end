import React, { useEffect, useState } from "react";
import "./HomePage.css";
import {Button, Card, CardActions, CardHeader, CardMedia, Grid} from "@mui/material";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import api from "../../api";
// import 'src/Components/VideoCard/VideoCard.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'None',
  padding: theme.spacing(1),
  textAlign: "center",
  color: 'None',
}));

function HomePage() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    api.get('/videos/videos/')
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
          {videos && (
              <div>
                  {videos.map(video => (
                      <Grid item md={12} xs={12}>
                          <Card className="homepage-card">
                              <CardHeader
                                  className="card-header"
                                  title={video.title}
                                  subheader="Author, Released Date"
                              />
                              <CardMedia
                                  component="img"
                                  height="200"
                                  image={video.cover}
                                  alt="Random Unsplash Image"
                              />
                              {/*<div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: 16 }}>*/}
                              {/*    {video.tags.length > 0 && (*/}
                              {/*        <div>*/}
                              {/*            {video.tags.map((tag) => (*/}
                              {/*                <Chip key={tag.id} className="card-chips" label={tag.name} />*/}
                              {/*            ))}*/}
                              {/*        </div>*/}
                              {/*    )}*/}
                              {/*</div>*/}
                              <CardActions className="card-action">
                                  <Button href="id" class="card-button" size="large">
                                      Let's WATCH
                                  </Button>
                              </CardActions>
                          </Card>
                      </Grid>
                  ))}
              </div>
              )}
      </Grid>
    </div>
  );
}

export default HomePage;
