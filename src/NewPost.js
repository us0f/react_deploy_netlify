import { useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions} from 'easy-peasy';
import { format } from 'date-fns';

const NewPost = () => {
  const navigate = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? (Number(posts[posts.length - 1].id) + 1).toString() : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, date: datetime, body: postBody};
    savePost(newPost);
    navigate('/');
  }

  return (
    <main className='grow w-full p-4'>
        <h1 className='text-2xl font-semibold mb-4'>NewPost</h1>
        <form className='' onSubmit={handleSubmit}>

          <label className=''>Title :</label>
          <input id='postTitle' className='border-black border-solid border w-full mb-4 pl-1 rounded-sm' type='text' value={postTitle} onChange={(e) => setPostTitle(e.target.value )} required />

          <label className=''>Post :</label>
          <textarea id='postBody' className='border-black border-solid border w-full min-h-20 pl-1 rounded-sm' required value={postBody} onChange={(e) => setPostBody(e.target.value)} />

          <button className='border-black border-solid border w-full drop-shadow-2xl rounded-md bg-gray-200 font-semibold leading-10 my-4' type='submit'>Submit</button>

        </form>
    </main>
  )
}

export default NewPost;