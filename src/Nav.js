import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

  useEffect( () => {
    const filteredPosts = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredPosts.reverse());
  }, [posts, search, setSearchResults])


  const itemStyle = 'flex hover:bg-white hover focus:bg-white hover:text-black focus:text-black text-2xl h-full w-28'
  const linkStyle = 'flex cursor-pointer justify-center items-center h-full w-full pb-2 lg:pb-1'
  return (
    <nav className='flex flex-col-reverse bg-neutral-800 justify-center items-center h-24 lg:flex-row lg:h-14'>

        <ul className='flex text-white justify-evenly items-center h-full w-full pt-2 lg:w-2/5 lg:pt-0'>

          <li className={itemStyle}><Link to='/' className={linkStyle}>Home</Link></li>
          <li className={itemStyle}><Link to='post' className={linkStyle}>Post</Link></li>
          <li className={itemStyle}><Link to='about' className={linkStyle}>About</Link></li>

        </ul>

        <form className='flex w-full justify-center items-center h-full lg:w-1/6'>
          <input className='flex pl-2 h-8 w-3/5 mt-2 lg:w-full lg:h-10 lg:mt-0' placeholder='Search Posts' id='search' type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        </form>

    </nav>
  )
}
  
export default Nav;