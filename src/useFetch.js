import { useState, useEffect } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortFetch = new AbortController();

    fetch(url, {signal: abortFetch.signal})
      .then(res => {

        if (!res.ok) {
          throw Error("Could not fetch the data from the server");
        }
        return res.json();
      })
      .then(data => {
        setError(null);
        setData(data);
        setPending(false);
      })
      .catch(err => {

        if (err.name !== 'AbortError') {
          setError(err.message);
          setPending(false);
        }
        
      })

    return () => abortFetch.abort();

  }, [url]);

  return {data, pending, error};

}

export default useFetch;