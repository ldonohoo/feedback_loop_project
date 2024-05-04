import { useHistory } from "react-router-dom";
function UnderstandingForm() {
    const history = useHistory();


    return (

        <>
            <div>comments</div>
            <button onClick={history.push('/review')}>next</button>
        </>


    )
}

export default UnderstandingForm;