import React from 'react';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({isLoading, fetchError}) => {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className='grow w-full p-2 overflow-auto'>

      {isLoading && <p>Loading Posts</p> }
      {!isLoading && fetchError && <p>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? (<Feed posts={searchResults}/>) : <p className='mt-8'>No posts to display.</p>)}

    </main>
  )
}

export default Home;