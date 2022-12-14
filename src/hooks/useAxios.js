import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      setData(response.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isLoading, isError, data };
};
export default useAxios;

// usage: const { isLoading, isError, data: notes } = useAxios("http://jsonplaceholder.typicode.com/posts");
