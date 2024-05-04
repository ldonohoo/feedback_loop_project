import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ThankYouPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLeaveNewFeedbackButton =() => {
        // clear store data
        dispatch({ type: 'RESET__CURRENT_FEELING' })
        dispatch({ type: 'RESET__CURRENT_UNDERSTANDING' })
        dispatch({ type: 'RESET__CURRENT_SUPPORT' })
        dispatch({ type: 'RESET__CURRENT_COMMENTS' })
        history.push('/');
    }

    return (
        <>
            <header>
                <h1>Feedback!</h1>
            </header>
            <h2>Thank You!</h2>
            <button data-testid="next"
                    onClick={handleLeaveNewFeedbackButton}>Leave New Feedback</button>
        </>
    )
}

export default ThankYouPage;