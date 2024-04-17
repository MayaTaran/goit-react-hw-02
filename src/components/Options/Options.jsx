import React from 'react';

export const Options = ({updateFeedback }) => {
    return (
      <div>
            <button onClick={() => updateFeedback('good')} >good</button>
            <button  onClick={() => updateFeedback('neutral')}>neutral</button>
            <button onClick={() => updateFeedback('bad')}>bad</button>
            
        </div>
  );
};