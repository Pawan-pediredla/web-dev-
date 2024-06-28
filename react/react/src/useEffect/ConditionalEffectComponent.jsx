import React, { useState, useEffect } from 'react';

function ConditionalEffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // Dependency array includes `count`

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ConditionalEffectComponent;
