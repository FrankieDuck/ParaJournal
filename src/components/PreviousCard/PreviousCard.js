import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function PreviousCard() {
  return (
    <Card sx={{ maxWidth: 745, display: 'flex', justifyContent: 'space-evenly', marginLeft: 8, marginTop: '24px', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Previous Investigations
          </Typography>
          <Typography variant="body2" color="white">
          <Typography paragraph >
          This space will show a log of your previous investigations
        </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
