import React, { useState, useEffect } from 'react';

export const Notification = ({ total }) => {
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    if (total > 0) {
      setShowNotice(false);
    }
  }, [total]);

  return (
    <div>
      {showNotice ? (
        <p>Not feedback yet</p>
      ) : null}
    </div>
  );
};
