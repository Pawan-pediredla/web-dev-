<<<<<<< HEAD
import  { useEffect } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 7a604b193e16e2ab220bb3c78ed0f113641fb48e

function WelcomeComponent() {
  useEffect(() => {
    console.log('Component mounted');
<<<<<<< HEAD
  }, []); 
=======
  }, []); // Empty dependency array means this effect runs only once
>>>>>>> 7a604b193e16e2ab220bb3c78ed0f113641fb48e

  return <div>Welcome to the application!</div>;
}

<<<<<<< HEAD
export default WelcomeComponent;
=======
export default WelcomeComponent;
>>>>>>> 7a604b193e16e2ab220bb3c78ed0f113641fb48e
