import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './LayoutEffect.css';
const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);
  const { quote } = !!data && data[0];
  const pTagRef = useRef();
  const [boxSise, setBoxSise] = useState({});
  useLayoutEffect(() => {
    setBoxSise(pTagRef.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <figure className="text-end">
        <blockquote className="blockquote">
          <p ref={pTagRef} className="mb-3">
            {quote}
          </p>
        </blockquote>
      </figure>
      <pre>{JSON.stringify(boxSise, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};

export default LayoutEffect;
