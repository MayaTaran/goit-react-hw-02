import './App.css'
import React, { useState, useEffect } from 'react';
import { Description } from './components/Description/Description.jsx';
import { Feedback } from './components/Feedback/Feedback.jsx';
import { Options } from './components/Options/Options.jsx';
import {Notification } from './components/Notification/Notification.jsx';

const App = () => {
  const initialClicks = JSON.parse(localStorage.getItem('clicks')) || { good: 0, neutral: 0, bad: 0 };
  const [clicks, setClicks] = useState(initialClicks);
  
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedbackPercent = Math.round((clicks.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setClicks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  useEffect(() => {
    localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks]);

  const handleReset = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };
  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}
              totalFeedback={totalFeedback} 
        handleReset={handleReset} />
      
      {totalFeedback > 0 ?
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          stat={positiveFeedbackPercent}
          updateFeedback={updateFeedback}
        />
        :
        <Notification
          total={totalFeedback} />}
    </>
  );
};


export default App;
