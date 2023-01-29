import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const StyledGrid = styled(Grid)({
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '20px',
    paddingBottom: '20px',
});

export default function Solution(props) {
    const image_src = `https://minimal-kit-react.vercel.app/assets/images/covers/cover_${(Math.floor(Math.random() * 10) + 1)}.jpg`;
    const [Question, setQuestion] = useState({
        title: undefined,
        body: undefined,
    });
    const [solnArray, setSolnArray] = useState([]);
    const [ans, setAns] = useState(undefined);
    const [toggler, setToggler] = useState(false);

    const pathName = window.location.pathname;
    const pathArray = pathName.split('/');
    const quesId = pathArray[2];

    // const handleVotes = (qId, aId, vote) => {
    //     props.votesHandler(qId, aId, vote);
    //     setToggler(!toggler);
    // }

    useEffect(() => {
        const temp = [];
        axios.get(`http://localhost:8080/getById/${quesId}`)
            .then(response => {
                //console.log(response.data);
                setQuestion({
                    title: response.data.title,
                    body: response.data.quesBody,
                });
                response.data.answers.forEach((ansr) => temp.push(ansr));
                //console.log("temp", temp);
                setSolnArray([...temp]);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    alert(error.response.data.error);
                }
            });
    }, []);


    const tableData = (currAns, idx) => {
        return (
            <TableRow key={idx} hover>
                <TableCell>
                    Answered By: {currAns.answeredBy}
                    <br />
                    Date: {currAns.answeredOnDate}
                    <br />
                    Total Votes: {currAns.votes}
                </TableCell>
                <TableCell align='left'>
                    <Typography key={idx} variant="body2" color="text.secondary">
                        {currAns.ans}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }

    return (
        <>
            <h1>solution window</h1>
            <StyledGrid container spacing={2}>
                <Grid item xs={12} >
                    <Card sx={{ minWidth: 275 }} key={props.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={image_src}
                            alt="cover image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {Question.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {Question.body}
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {solnArray.map(tableData)}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <br />
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                fullWidth
                                label="Post Your Answer"
                                onChange={(e) => setAns(e.target.value)}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    props.solveQuestionHandler(ans, quesId);
                                    // setToggler(!toggler);
                                }}
                            >
                                Submit
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </StyledGrid>
        </>
    );
}