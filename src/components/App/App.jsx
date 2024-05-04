import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header';
import FeelingForm from '../FeelingForm';
import UnderstandingForm from '../UnderstandingForm';
import SupportedForm from '../SupportedForm';
import CommentsForm from '../CommentsForm';
import ReviewFeedback from '../ReviewFeedback';
import ThankYouPage from '../ThankYouPage';

function App() {

  return (
    <div className='App'>
      <Header />
      <FeelingForm/>
      <Router>
        <Route exact path='/'>
          <FeelingForm />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>
        {/* <Route exact path='/supported'>
          <SupportedForm />
        </Route>
        <Route exact path='/comments'>
           <CommentsForm />
        </Route>
        <Route exact path='/feedback'>
           <ReviewFeedback />
        </Route>
        <Route exact path='/thanks'>
           <ThankYouPage />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
