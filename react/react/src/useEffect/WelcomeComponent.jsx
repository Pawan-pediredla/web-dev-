import React, { useEffect } from 'react';

function WelcomeComponent() {
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array means this effect runs only once

  return <div>Welcome to the application!</div>;
}

export default WelcomeComponent;
