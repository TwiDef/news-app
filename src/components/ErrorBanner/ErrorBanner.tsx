import React from 'react';

const ErrorBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/4125/4125857.png" alt="error-banner" />
      <h5
        className="text-2xl font-bold text-red-800 text-center">
        Sorry, but something went wrong! Try again later!
      </h5>
    </div>
  );
};

export default ErrorBanner;