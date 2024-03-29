import { Button } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import QuesCard from './QuesCard';

const StyledDiv = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});
const StyledGrid = styled(Grid)({
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '20px',
  paddingBottom: '20px',
});

export default function Questions() {
  const [quesArray, setQuesArray] = useState([]);

  useEffect(() => {
    const temp = [];
    axios.get(`${process.env.REACT_APP_HOST}/allQuestions`,
    {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        response.data.forEach(element => {
          temp.push({
            id: element.qid,
            title: element.title,
            body: element.quesBody,
            askedBy: element.postedBy,
            date: element.postedOnDate,
            answersCount: element.answers.length,
          });
        });
        setQuesArray([...temp]);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          alert(error.response.data.error);
        }
      });
  }, []);

  return (
    <>
    <StyledDiv>
      <StyledGrid container spacing={2}>
        <Grid item xs={12} >
          <QuesCard
            id={10}
            title={"test title"}
            body={"test body"}
            askedBy={"tester"}
            date={"12/22"}
            answersCount={10}
          />
        </Grid>
        {
          quesArray.map((currQues) => {
            return (
              <Grid item xs={12} >
                <QuesCard
                  id={currQues.id}
                  title={currQues.title}
                  body={currQues.body}
                  askedBy={currQues.askedBy}
                  date={currQues.date}
                  answersCount={currQues.answersCount}
                />
              </Grid>
            );
          })
        }
      </StyledGrid>
      </StyledDiv>
    </>
  );
}