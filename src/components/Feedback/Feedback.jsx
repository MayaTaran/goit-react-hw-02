import React from 'react';
import css from "./Feedback.module.css";

export const Feedback = ({updateFeedback }) => {
    return (
      <div>
            <button onClick={() => updateFeedback('good')} >good</button>
            <button  onClick={() => updateFeedback('neutral')}>neutral</button>
            <button onClick={() => updateFeedback('bad')}>bad</button>
            
        </div>
  );
};