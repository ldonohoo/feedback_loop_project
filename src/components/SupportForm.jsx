import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function SupportForm() {
    const history = useHistory();
    const currentSupportScore = useSelector(store => store.currentSupportScore);
    const [inputSupportScore, setInputSupportScore] = useState(currentSupportScore);
    const dispatch = useDispatch();

    const handleButton =(event, direction) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_SUPPORT',
            payload: inputSupportScore
        })
        if (direction === 'next') {
            history.push('/comments');
        } else if (direction === 'previous') {
            history.push('/understanding');
        }
    }

    return (
        <>
            <h2>How well are you being Supported?</h2>
            <form onSubmit={(e) => {handleButton(e, 'next')}}>
                <label htmlFor="inputSupport">Supported?</label>
                <input id="inputSupport" 
                       type="number"
                       max="5"
                       min="1"
                       data-testid="input"
                       onChange={(e) => {setInputSupportScore(e.target.value)}}
                       value={inputSupportScore} />
                <button onClick={(e) => {handleButton(e, 'previous')}}>previous</button>  
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default SupportForm;