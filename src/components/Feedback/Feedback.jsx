
import React, { useState, useEffect } from 'react';

export const Feedback = ({ good, neutral, bad, total, stat }) => {


  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {stat}%</p>
    </div>
  );
};