import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';

const StyledCard = styled(Card)({
  maxWidth: 645,
  background: 'rgba(0,0,0,0.5)',
  margin: '20px'
});
const StyledTitleTypography = styled(Typography)({
  fontFamily: 'Nunito',
  fontWeight: 'bold',
  fontSize: '2rem',
  color: '#fff'
});
const StyledDescTypography = styled(Typography)({
  fontFamily: 'Nunito',
  fontSize: '1.1rem',
  color: '#ddd'
});

export default function ActionCard(props) {
  return (
    <Collapse in={props.checked} {...(props.checked ? { timeout: 1000 } : {})}>
      <StyledCard>
        <CardMedia
          style={{ height: 440 }}
          image={`https://minimal-kit-react.vercel.app/assets/images/covers/cover_${(Math.floor(Math.random() * 10) + 1)}.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <StyledTitleTypography
            gutterBottom
            variant="h5"
            component="h1"
          >
            {props.title}
          </StyledTitleTypography>
          <StyledDescTypography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.desc}
          </StyledDescTypography>
        </CardContent>
      </StyledCard></Collapse>
  );
}