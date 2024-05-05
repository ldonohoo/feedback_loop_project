import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ReviewFeedback({fetchFeedback}) {
    const history = useHistory();
    const currentFeelingScore = 
        useSelector(store => store.currentFeelingScore);
    const currentUnderstandingScore = 
        useSelector( store => store.currentUnderstandingScore);
    const currentSupportScore = 
        useSelector( store => store.currentSupportScore);
    const currentComments = useSelector(store => store.currentComments);

    console.log('feel', currentFeelingScore)
    console.log('sup', currentSupportScore);

    const handleSubmitButton = () => {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
                feeling: currentFeelingScore,
                understanding: currentUnderstandingScore,
                support: currentSupportScore,
                comments: currentComments
            }
        })
        .then(response => {
            console.log('Feedback sucessfully added!');
            fetchFeedback();
        })
        .catch(error => {
            console.log('Problem adding feedback. Try again later.');
        })
        history.push('/thanks');

    }

    return (
        <>
            <Header />
            <h2>Review Your Feedback</h2>
            <p>Feelings: {currentFeelingScore}</p>
            <p>Understanding: {currentUnderstandingScore}</p>
            <p>Support: {currentSupportScore}</p>
            <p>Comments: {currentComments}</p>
            <Box display="flex"
                     justifyContent="space-between"
                     sx={{ m: '0 40%' }}>
                <Button variant="contained" 
                        onClick={() => {history.push('/support')}}>previous</Button>  
                <Button variant="contained" 
                        onClick={handleSubmitButton}
                        data-testid="next">Submit</Button>
            </Box>
        </>
    )
}

export default ReviewFeedback;