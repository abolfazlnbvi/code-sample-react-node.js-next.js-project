import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MainCard(probs) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: "row-reverse", margin: "auto", justifyContent: "space-between" }}>


      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {probs.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {probs.numTitle1} : {probs.num1}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {probs.numTitle2} : {probs.num2}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {probs.numTitle3} : {probs.num3}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {probs.numTitle4} : {probs.num4}
        </Typography>
        <Link to={probs.url} >
          <Button variant='contained' size='large' sx={{width: "100%"}}>
            {probs.title}
          </Button>
        </Link>
      </CardContent>
    </Card>


  );
}