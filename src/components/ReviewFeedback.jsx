import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function ReviewFeedback() {
    const history = useHistory();
    const currentFeelingScore = 
        useSelector(store => store.currentFeelingScore);
    const currentUnderstandingScore = 
        useSelector( store => store.currentUnderstandingScore);
    const currentSupportScore = 
        useSelector( store => store.currentSupportScore);
    const currentComments = useSelector(store => store.currentComments);

    console.log('feel'. currentFeelingScore)
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
        history.push('/thanks');

    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {currentFeelingScore}</p>
            <p>Understanding: {currentUnderstandingScore}</p>
            <p>Support: {currentSupportScore}</p>
            <p>Comments: {currentComments}</p>
            <button onClick={handleSubmitButton}
                    data-testid="next">Submit</button>
        </>
    )
}

export default ReviewFeedback;