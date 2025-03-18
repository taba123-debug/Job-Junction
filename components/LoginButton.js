// components/LoginButton.js
"use client"; // Mark this as a Client Component

import { useRouter } from 'next/navigation';

const LoginButton = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    console.log('Navigating to /login'); // Debugging
    router.push('/login');
  };

  return (
    <button
      className="px-5 py-2 bg-blue-900 text-white rounded-2xl hover:bg-blue-200"
      onClick={handleLoginClick}
    >
      Login
    </button>
  );
};

export default LoginButton;