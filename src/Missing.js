import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='grow w-full p-4'>

      <h2 className='text-2xl font-bold mb-2'>Page Not Found!</h2>
      <p className='mb-4'>$#*@&#$%#*%*#$#*</p>
      <Link to='/' className='text-gray-600 underline'>Visit Our Homepage</Link>

    </main>
  )
}

export default Missing;