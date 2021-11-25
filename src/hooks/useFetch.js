import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    if (isMounted.current) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setState({ data, loading: false, error: null });
        });
    }
  }, [url]);
  return state;
};

export default useFetch;
