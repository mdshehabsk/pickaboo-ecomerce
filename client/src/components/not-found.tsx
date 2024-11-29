import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">Sorry  the page youre looking for doesnt exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-mainBlueColor text-white rounded ">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
