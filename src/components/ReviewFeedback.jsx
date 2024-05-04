import { useHistory } from "react-router-dom";
function ReviewFeedback() {
    const history = useHistory();


    return (


        <>
            <div>review</div>
            <button onClick={history.push('/thanks')}>next</button>
        </>


    )
}

export default ReviewFeedback;