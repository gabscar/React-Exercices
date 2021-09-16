  
import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {
  const request = useHttp(getAllQuotes,true);
  useEffect(() => {
    request.sendRequest();
  }, [request.sendRequest]);

  if (request.status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (request.error) {
    return <p className='centered focused'>{request.error}</p>;
  }

  if (request.status === 'completed' && (!request.data || request.data.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={request.data} />;
};

export default AllQuotes;