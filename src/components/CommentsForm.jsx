import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
            <Header />
            <h2>Comments?</h2>
            <form onSubmit={(e) => {handleButton(e, 'next')}}>
                <label id="commentsLabel" 
                       htmlFor="inputComments">Any comments you want to leave? </label>
                <input id="inputComments" 
                        type="text"
                        data-testid="input"
                        onChange={(e) => {setInputComments(e.target.value)}}
                        value={inputComments} />
                <Box display="flex"
                     justifyContent="space-between"
                     sx={{ m: '0 40%' }}>
                    <Button variant="contained"
                            onClick={(e) => {handleButton(e, 'previous')}}>previous</Button> 
                    <Button variant="contained"
                            type="submit"
                            data-testid="next">next</Button>
                </Box>
            </form>
        </>
    )
}

export default CommentsForm;