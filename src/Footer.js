import { useStoreState } from "easy-peasy";


const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer className='flex bg-blue-400 h-10 justify-center items-center'>

        <h1 className='text-xl font-semibold'>{postCount} Blog Posts</h1>

    </footer> 
  )
}

export default Footer;