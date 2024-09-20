import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

  return (
    <main className='w-full'>
      <div className='hover:bg-slate-200 rounded-md p-2'>
        <Link to={`/post/${post.id}`}>
        <h2 className='text-2xl font-semibold'>{post.title}</h2>
        <p className='text-xs'>{post.date}</p>
        <p className='mt-4'>{(post.body).length <=55 ? post.body : (post.body).slice(0, 25)}...</p> 
        </Link>
      </div>  
      <hr className='mt-2'></hr>
    </main>
  )
}

export default Post;