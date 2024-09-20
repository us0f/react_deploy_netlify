import React from 'react';
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = () => {
  const {id} = useParams();

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const navigate = useNavigate();

  useEffect( () => {
    if (post) {
        setEditTitle(post.title);
        setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody])

  const handleEdit = (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, date: datetime, body: editBody};
    editPost(updatedPost);
    navigate(`/post/${id}`);
  }

  return (
    <main className='grow w-full p-4'>

        {editTitle &&
        <>
            <h1 className='text-2xl font-semibold mb-4'>Edit Post</h1>
            <form className='' onSubmit={(e) => e.preventDefault()}>

            <label className=''>Title :</label>
            <input id='editTitle' className='border-black border-solid border w-full mb-4 pl-1 rounded-sm' type='text' value={editTitle} onChange={(e) => setEditTitle(e.target.value )} required />

            <label className=''>Post :</label>
            <textarea id='editBody' className='border-black border-solid border w-full min-h-20 pl-1 rounded-sm' required value={editBody} onChange={(e) => setEditBody(e.target.value)} />

            <button className='border-black border-solid border w-full drop-shadow-2xl rounded-md bg-gray-200 font-semibold leading-10 my-4' type='button' onClick={() => handleEdit(post.id)}>Submit</button>

            </form>
        </>
        }

        {!editTitle &&
        <main className='grow w-full p-4'>

            <h2 className='text-2xl font-bold mb-2'>Post Not Found!</h2>
            <p className='mb-4'>$#*@&#$%#*%*#$#*</p>
            <Link to='/' className='text-gray-600 underline'>Visit Our Homepage</Link>
      
        </main>
        }

    </main>
  )
}

export default EditPost;