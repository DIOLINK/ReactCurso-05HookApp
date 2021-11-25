import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effects.css';
const CallbackHook = () => {
  const [count, setCount] = useState(10);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  //se usa con useEffect para que se ejecute solo cuando el componente se renderice
  const increment = useCallback(
    (num) => {
      setCount((c) => c + num);
    },
    [setCount]
  );
  return (
    <div>
      <h1>UseCallback Hook: {count}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
