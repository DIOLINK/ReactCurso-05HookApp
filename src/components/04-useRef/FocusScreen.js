import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {
  const inputRef = useRef();
  // console.log('ref :>> ', inputRef);
  const handleClick = () => {
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    // inputRef.current.focus();
    inputRef.current.select();
    // console.log('ref :>> ', inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Write something..."
        className="form-control"
      />

      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
