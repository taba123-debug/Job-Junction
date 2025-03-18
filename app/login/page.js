
'use client'; 
import React from 'react';
// import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

// const handleContinueClick = () => {
//   const router = useRouter();
//   console.log('Back continue clicked');
//   router.push('/features'); 
// };
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl  text-blue-900 font-bold mb-6 text-center">LOGIN :)</h1>
        <form>
          <div className="mb-4">
            <label className="block text-3xl font-medium mb-2">Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-3xl font-medium mb-2">Password:</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full text-2xl bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <div>
            <button 
            //  onClick={handleBackClick}
            className='mt-5  rounded-xl bg-blue-900 text-white py-3 px-4 '>Back</button>
            <Link href="/features">
            <button 
            // onClick={handleContinueClick}
            className=' mt-5 ml-36  rounded-xl bg-blue-900 text-white px-4 py-3'>Continue</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;