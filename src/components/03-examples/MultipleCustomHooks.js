import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data } = useFetch(url);
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes!</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className="mb-3">{quote}</p>
            <figcaption className="blockquote-footer">{author}</figcaption>
          </blockquote>
        </figure>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
