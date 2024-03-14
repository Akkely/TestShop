import { Button, TextField, Typography, Rating } from "@mui/material";
import { useState } from "react";
import * as React from "react";

function ReviewForm({ onSave }) {
	const [review, setReview] = useState({ title: "", body: "", rating: 0,});

	return (
		<form>
			<div>
				<Typography component='legend'>Betygsätt</Typography>
				<Rating
  name="simple-controlled"
  value={review.rating}
  onChange={(event, newValue) => {
    setReview({ ...review, rating: newValue });
  }}
/>
			</div>
			<div>
				<TextField
					fullWidth
					value={review.title}
					onChange={(e) => setReview({ ...review, title: e.target.value })}
					label='Rubrik'
					name='title'
					id='title'
					margin='normal'
				/>
			</div>
			<div>
				<TextField
					fullWidth
					multiline
					minRows={3}
					value={review.body}
					onChange={(e) => setReview({ ...review, body: e.target.value })}
					label='Innehåll'
					name='body'
					id='body'
				/>
			</div>
			<Button onClick={() => onSave(review)}>Skicka</Button>
		</form>
	);
}

export default ReviewForm;
