import { useHistory } from "react-router-dom";
function CommentsForm() {
    const history = useHistory();


    return (

        <>
            <div>comments</div>
            <button onClick={history.push('/review')}></button>
        </>


    )
}

export default CommentsForm;