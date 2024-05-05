import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function UnderstandingForm() {
    const history = useHistory();
    const currentUnderstandingScore = useSelector(store => store.currentUnderstandingScore);
    const [inputUnderstandingScore, setInputUnderstandingScore] = useState(currentUnderstandingScore);
    const dispatch = useDispatch();

    const handleButton =(event, direction) => {
        event.preventDefault();
        dispatch({
            type: 'SET_CURRENT_UNDERSTANDING',
            payload: inputUnderstandingScore
        })
        if (direction === 'next') {
            history.push('/support');
        } else if (direction === 'previous') {
            history.push('/');
        }
    }

    
    return (
        <>
            <Header />
            <h2>How are you understanding the content?</h2>
            <form onSubmit={(e) => {handleButton(e, 'next')}}>
                <label htmlFor="inputUnderstanding">Understanding?</label>
                <input id="inputUnderstanding" 
                       type="number"
                       max="5"
                       min="1"
                       data-testid="input"
                       onChange={(e) => {setInputUnderstandingScore(e.target.value)}}
                       value={inputUnderstandingScore} />
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

export default UnderstandingForm;