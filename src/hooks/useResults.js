import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const res = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'chicago',
          limit: 50,
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
