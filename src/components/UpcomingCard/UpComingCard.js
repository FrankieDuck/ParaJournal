import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function UpComingCard() {
  return (
    <Card id="upcoming_investigation" sx={{ maxWidth: 545, display: 'flex', justifyContent: 'space-evenly', marginLeft: 8, marginTop: '24px', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/Images/skeleton.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Upcoming Investigations
          </Typography>
          <Typography variant="body2" color="white">
          <Typography paragraph >
          This space will track your upcoming investigations
        </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
