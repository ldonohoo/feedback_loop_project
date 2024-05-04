import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function CommentsForm() {
    const history = useHistory();
    const currentComments = useSelector(store => store.currentComments);
    const [inputComments, setInputComments] = useState(currentComments);
    const dispatch = useDispatch();

    const handleButton =(event, direction) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_COMMENTS',
            payload: inputComments
        })
        if (direction === 'next') {
            history.push('/review');
        } else if (direction === 'previous') {
            history.push('/support');
        }
    }

    return (
        <>
            <h2>Comments?</h2>
            <form onSubmit={(e) => {handleButton(e, 'next')}}>
                <label htmlFor="inputComments">Any comments you want to leave? </label>
                <input id="inputComments" 
                        type="text"
                        data-testid="input"
                        onChange={(e) => {setInputComments(e.target.value)}}
                        value={inputComments} />
                <button onClick={(e) => {handleButton(e, 'previous')}}>previous</button> 
                <button type="submit"
                        data-testid="next">next</button>
            </form>
        </>
    )
}

export default CommentsForm;