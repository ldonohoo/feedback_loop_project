import { useHistory } from "react-router-dom";
function SupportedForm() {
    const history = useHistory();


    return (


        <>
            <div>comments</div>
            <button onClick={history.push('/comments')}>next</button>
        </>


    )
}

export default SupportedForm;