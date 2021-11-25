import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';
const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <button onClick={increment} className="btn btn-primary">
        Increment +1
      </button>{' '}
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
