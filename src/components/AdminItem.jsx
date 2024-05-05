import axios from "axios";
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

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
            <TableCell>{item.feeling}</TableCell>
            <TableCell>{item.understanding}</TableCell>
            <TableCell>{item.support}</TableCell>
            <TableCell>"{item.comments}"</TableCell>
            <TableCell><Button variant="outlined"
                               onClick={handleDelete}>🗑️</Button></TableCell>
        </>
    )
}

export default AdminItem;