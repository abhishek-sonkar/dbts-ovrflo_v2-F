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

export default function CountCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.label}
          </Typography>
          <Typography component="div" variant="h5">
            {props.count}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ height:100, width: 200 }}
        image={`https://minimal-kit-react.vercel.app/assets/images/covers/cover_${Math.floor(Math.random() * 10)}.jpg`}
        alt="img"
      />
    </Card>
  );
}