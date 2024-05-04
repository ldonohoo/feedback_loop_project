import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";

function CommentsForm() {
    const history = useHistory();
    const [inputComments, setInputComments] = useState('');
    const dispatch = useDispatch();

    const handleNextButton =(event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_COMMENTS',
            payload: inputComments
        })
        history.push('/review');
    }

    return (
        <>
            <h2>Comments?</h2>
            <form onSubmit={handleNextButton}>
                <label htmlFor="inputComments">Any comments you want to leave? </label>
                <input id="inputComments" 
                        type="text"
                        data-testid="input"
                        onChange={(e) => {setInputComments(e.target.value)}}
                        value={inputComments} />
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default CommentsForm;