import React, { useRef } from 'react';

const UseRefStudy = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
        <div>
        <label>Normal Input: </label>
        <input type="text" placeholder="Button ignores me" />
      </div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRefStudy;
