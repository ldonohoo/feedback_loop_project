import React from 'react';
import './App.css';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingForm from '../FeelingForm';
import UnderstandingForm from '../UnderstandingForm';
import SupportForm from '../SupportForm';
import CommentsForm from '../CommentsForm';
import ReviewFeedback from '../ReviewFeedback';
import ThankYouPage from '../ThankYouPage';
import Admin from '../Admin';


function App() {

  const dispatch = useDispatch();

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: 'api/feedback'
      })
      .then(response => {
        console.log('Successful fetch of feedback data:', response.data);
        dispatch({
          type: 'SET_FEEDBACK',
          payload: response.data
        })
      })
      .catch(error => {
          console.log('Big trouble getting feedback data:', error);
      })
  }


  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <FeelingForm />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>
        <Route exact path='/support'>
          <SupportForm />
        </Route>
        <Route exact path='/comments'>
           <CommentsForm />
        </Route>
        <Route exact path='/review'>
           <ReviewFeedback fetchFeedback={fetchFeedback}/>
        </Route>
        <Route exact path='/thanks'>
           <ThankYouPage />
        </Route>
        <Route exact path='/admin'>
          <Admin fetchFeedback={fetchFeedback}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
