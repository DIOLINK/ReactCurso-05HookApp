import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({ data, loading: false, error: null });
      });
  }, [url]);
  return state;
};

export default useFetch;
