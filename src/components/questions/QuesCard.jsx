import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function QuesCard(props) {

    let navigate = useNavigate();
    const image_src = `https://minimal-kit-react.vercel.app/assets/images/covers/cover_${(props.id) % 24}.jpg`;

    return (
        <Card sx={{ minWidth: 275 }} key={props.id}>
            <CardActionArea onClick={() => navigate(`/solveQuestion/${(props.id)}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image_src}
                    alt="cover image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <p>{props.askedBy}</p>
                    <p>{props.date}</p>
                    <p>{props.answersCount}</p>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}