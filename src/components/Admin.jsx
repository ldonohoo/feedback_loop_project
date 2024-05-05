import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminItem from "./AdminItem";
import FeedbackResultsHeader from "./FeedbackResultsHeader";

function Admin({fetchFeedback}) {
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFeedback();
    }, []);

    
    return (
        <>
            <FeedbackResultsHeader />
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback.map(item => {
                            console.log(JSON.stringify(item));
                            return (
                                <tr key={item.id}>
                                    <AdminItem item={item}
                                               fetchFeedback={fetchFeedback}/>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>


        </>
    )
}

export default Admin;