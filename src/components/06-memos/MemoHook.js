import React, { useMemo, useState } from 'react';
import { processHeavy } from '../../helpers/processHeavy';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MemoHook = () => {
  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(false);

  const memoProcessHeavy = useMemo(() => processHeavy(counter), [counter]);
  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{memoProcessHeavy}</p>
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

export default MemoHook;
