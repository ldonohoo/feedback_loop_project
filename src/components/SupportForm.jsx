import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";

function SupportForm() {
    const history = useHistory();

    const [inputSupportScore, setInputSupportScore] = useState(0);
    const dispatch = useDispatch();

    const handleNextButton =(event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_SUPPORT',
            payload: inputSupportScore
        })
        history.push('/comments');
    }

    return (
        <>
            <h2>How well are you being Supported?</h2>
            <form onSubmit={handleNextButton}>
                <label htmlFor="inputSupport">Supported?</label>
                <input id="inputSupport" 
                       type="number"
                       max="5"
                       min="1"
                       data-testid="input"
                       onChange={(e) => {setInputSupportScore(e.target.value)}}
                       value={inputSupportScore} />
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default SupportForm;