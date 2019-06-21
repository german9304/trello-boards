import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);
      const jsonData = await data.json();
      return jsonData;
    }

    function getData(data) {
      setData(data);
    }

    fetchData()
      .then(getData)
      .catch(err => Error(err));
  }, [url]);

  return {
    data,
    setData,
  };
}

export default useFetch;
