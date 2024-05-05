import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminItem from "./AdminItem";
import FeedbackResultsHeader from "./FeedbackResultsHeader";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Admin({fetchFeedback}) {
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFeedback();
    }, []);

    
    return (
        <>
            <FeedbackResultsHeader />
            <TableContainer sx={{ m: '5%' }}>
                <Table id="admin-table">
                    <TableHead id="admin-table-header">
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {feedback.map(item => {
                            console.log(JSON.stringify(item));
                            return (
                                <TableRow id="admin-table-row"
                                          key={item.id}>
                                    <AdminItem item={item}
                                               fetchFeedback={fetchFeedback}/>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}

export default Admin;