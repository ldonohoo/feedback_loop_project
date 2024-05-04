import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function FeelingForm() {
    const history = useHistory();


    return (
        <>
            <div>feelings</div>
            <button onClick={console.log('here!')}>next</button>
        </>
    )
}

export default FeelingForm;

