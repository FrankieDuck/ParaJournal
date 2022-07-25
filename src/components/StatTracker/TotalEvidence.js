import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TotalEvidence() {
  return (
    <div className='total-files'>
    <Card sx={{ minWidth: 475 }} >
      <CardContent>
        <CardActions>
        <Button size="small" sx={{color: 'white'}}>Total Files: </Button>
      </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}
