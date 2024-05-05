import axios from "axios";

function AdminItem({item, fetchFeedback}) {

    const handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `api/feedback/${item.id}`
        })
        .then(response => {
            console.log('Delete of a feedback item successful');
            fetchFeedback();
        })
        .catch(error => {
            console.log('Error deleting a feedback item: ',error);
        })
    }

    return (
        <>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>"{item.comments}"</td>
            <button onClick={handleDelete}>🗑️</button>
        </>
    )
}

export default AdminItem;