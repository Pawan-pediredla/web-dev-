import  { useEffect } from 'react';

function WelcomeComponent() {
  useEffect(() => {
    console.log('Component mounted');
  }, []); 

  return <div>Welcome to the application!</div>;
}

export default WelcomeComponent;