import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function PostQuestion(props) {
	const [title, setTitle] = useState("");
	const [quesBody, setQuesBody] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		props.postQuestionHandler(title, quesBody);
	};

	return (
		<Grid alignItems="center" justifyContent="center" padding={2} margin={5}>
			<h1>Post Question</h1>
			<Card sx={{}}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Title
					</Typography>
					<TextField
						fullWidth
						id="outlined-required"
						required
						onChange={e => setTitle(e.target.value)}
					/>
				</CardContent>
			</Card>
			<Card sx={{}}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Details of problem
					</Typography>
					<TextField
						id="outlined-multiline-static"
						multiline
						rows={4}
						fullWidth
						required
						onChange={e => setQuesBody(e.target.value)}
					/>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}>Submit</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
