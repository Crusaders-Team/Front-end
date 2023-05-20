import {
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import "./MyVideosCard.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function MyVideosCard({ id, title, uploadTime, description, videoSrc, tags }) {
  return (
    <Card className="homepage-card">
      <CardHeader
        className="card-header"
        title="My Title"
        subheader="Author, Released Date"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://source.unsplash.com/random"
        alt="Random Unsplash Image"
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: 16 }}>
        <Chip className="card-chips" label="Tag 1" />
        <Chip className="card-chips" label="Tag 2" />
        <Chip className="card-chips" label="Tag 3" />
      </div>
      <CardActions className="card-action">
        <Button class="edit-dlt-button" size="large">
          <EditIcon />
        </Button>
        <Button class="edit-dlt-button" size="large">
          <DeleteOutlineIcon />
        </Button>
        <Button href="id" class="card-button" size="large">
          Let's WATCH
        </Button>
      </CardActions>
    </Card>
  );
}
export default MyVideosCard;
