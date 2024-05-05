import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FeedbackResultsHeader from "./FeedbackResultsHeader";

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
            <button data-testid="next"
                    onClick={handleLeaveNewFeedbackButton}>Leave New Feedback</button>
        </>
    )
}

export default ThankYouPage;