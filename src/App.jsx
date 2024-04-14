import './App.css'
import { useState } from 'react';
import { Description } from './components/Description/Description.jsx';
import { Feedback } from './components/Feedback/Feedback.jsx';
import { Options } from './components/Options/Options.jsx';

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
	good: 0,
	neutral: 0,
	bad: 0
}
);
  const updateGood = () => { };
  const updateNeutral = () => { };
  const updateBad = () => {};
  return (
    <>
      <Description />
      <Feedback />
      <Options
        good={feedbackState.good}
        neutral={feedbackState.neutral}
        bad={ feedbackState.bad}
        />
    </>
  );
};


export default App;
