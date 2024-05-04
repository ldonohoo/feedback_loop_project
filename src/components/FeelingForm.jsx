import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingForm() {
    const history = useHistory();
    const [inputFeelingScore, setInputFeelingScore] = useState(0);
    const dispatch = useDispatch();

    const handleNextButton =(event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_FEELING',
            payload: inputFeelingScore
        })
        history.push('/understanding');
    }

    return (
        <>
            <h2>How are you feeling Today?</h2>
            <form onSubmit={handleNextButton}>
                <label htmlFor="inputFeeling">Feeling?</label>
                <input id="inputFeeling" 
                        type="number"
                        data-testid="input"
                        onChange={(e) => {setInputFeelingScore(e.target.value)}}
                        value={inputFeelingScore} />
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default FeelingForm;

