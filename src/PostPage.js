import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
  }

  return (
    <main className='grow w-full p-4'>
      <div>
          {post && 
          <>
            <h2 className='text-2xl font-semibold my-2'>{post.title}</h2>
            <p className='text-xs'>{post.date}</p> <br></br>
            <p className='text-xl'>{post.body}</p>

            <button className='bg-red-500 text-white rounded-md h-8 w-24 mt-6' onClick={() => handleDelete(post.id)}>Delete Post</button>
            <Link to={`/edit/${post.id}`}><button className='bg-green-600 text-white rounded-md h-8 w-24 mt-6 ml-10'>Edit Post</button></Link>
          </>
          }
          {!post && 
          <>
            <h2 className='text-2xl font-bold mb-2'>Post Not Found!</h2>
            <p className='mb-4'>$#*@&#$%#*%*#$#*</p>
            <Link to='/' className='text-gray-600 underline'>Visit Our Homepage</Link>
          </>
          }
        </div>
    </main>
  )
}

export default PostPage;