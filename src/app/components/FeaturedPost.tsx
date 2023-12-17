import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function FeaturedPost() {
  return (
    <>
    <Grid2 container spacing={2}>
  <Grid2 xs={1}></Grid2>
  <Grid2 xs={10} display="flex" justifyContent="center" alignItems="center">
    <Card sx={{maxWidth: 650}}>
      <CardHeader 
        title="Featured Post"
      /> 
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/music.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid2>
    <Grid2 xs={1}></Grid2>
    </Grid2>
    </>
  );
}

export default FeaturedPost;
