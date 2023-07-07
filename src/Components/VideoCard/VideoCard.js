import {
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import './VideoCard.css'

function VideoCard(id, title, cover) {
  return (
    <Card className="homepage-card">
      <CardHeader
        className="card-header"
        title={title}
        subheader="Author, Released Date"
      />
      <CardMedia
        component="img"
        height="200"
        image={cover}
        alt="Random Unsplash Image"
      />
        {/*<div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: 16 }}>*/}
        {/*    {tags.length > 0 && (*/}
        {/*        <div>*/}
        {/*            {tags.map((tag) => (*/}
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
  );
}
export default VideoCard;
