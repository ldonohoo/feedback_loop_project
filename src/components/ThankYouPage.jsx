import { useHistory } from "react-router-dom";
function ThankYouPage() {
    const history = useHistory();


    return (


        <>
            <div>comments</div>
            <button onClick={history.push('/')}>next</button>
        </>


    )
}

export default ThankYouPage;