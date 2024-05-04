import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingForm() {
    const history = useHistory();
    const currentFeelingScore = useSelector(store => store.currentFeelingScore);
    const [inputFeelingScore, setInputFeelingScore] = useState(currentFeelingScore);
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
                        max="5"
                        min="1"
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

