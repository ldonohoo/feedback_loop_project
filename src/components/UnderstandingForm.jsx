import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";

function UnderstandingForm() {
    const history = useHistory();
    const [inputUnderstandingScore, setInputUnderstandingScore] = useState(0);
    const dispatch = useDispatch();

    const handleNextButton =(event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_UNDERSTANDING',
            payload: inputUnderstandingScore
        })
        history.push('/support');
    }

    
    return (
        <>
            <h2>How are you understanding the content?</h2>
            <form onSubmit={handleNextButton}>
                <label htmlFor="inputUnderstanding">Understanding?</label>
                <input id="inputUnderstanding" 
                       type="number"
                       data-testid="input"
                       onChange={(e) => {setInputUnderstandingScore(e.target.value)}}
                       value={inputUnderstandingScore} />
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default UnderstandingForm;