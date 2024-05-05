import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FeedbackResultsHeader from "./FeedbackResultsHeader";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ThankYouPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLeaveNewFeedbackButton =() => {
        // clear store data
        dispatch({ type: 'RESET_CURRENT_FEELING' })
        dispatch({ type: 'RESET_CURRENT_UNDERSTANDING' })
        dispatch({ type: 'RESET_CURRENT_SUPPORT' })
        dispatch({ type: 'RESET_CURRENT_COMMENTS' })
        history.push('/');
    }

    return (
        <>
            <FeedbackResultsHeader />
            <h2>Thank You!</h2>
            <Box display="flex"
                     justifyContent="space-between"
                     sx={{ m: '0 40%' }}>
                <Button variant="contained" 
                        data-testid="next"
                        onClick={handleLeaveNewFeedbackButton}>Leave New Feedback</Button>
            </Box>
        </>
    )
}

export default ThankYouPage;