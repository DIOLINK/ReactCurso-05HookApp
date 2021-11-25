import { useState } from 'react';

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialState);

  return { increment, decrement, reset, counter };
};

export default useCounter;
