import React, { useState, useEffect, useRef } from 'react';

const SampleUseState = ({ clickCount }) => {
  const [message, setMessage] = useState("Waiting for click...");
  
  // 1. Create the ref "sticky note"
  const isFirstRender = useRef(true);

  useEffect(() => {
    // 2. Stop here if this is the very first render
    if (isFirstRender.current) {
      isFirstRender.current = false; // Flip note for next time
      return; 
    }

    // 3. This runs ONLY after the first render (when button is clicked)
    setMessage("i render after UseEffectStudy component");
  }, [clickCount]);

  return <p>{message}</p>;
};

const UseEffectStudy = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>i have render first</h1>
      <button onClick={() => setCount(count + 1)}>
        Update Child ({count})
      </button>
      <SampleUseState clickCount={count} />
    </div>
  );
};

export default UseEffectStudy;
