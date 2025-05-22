import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center'>
            <FiAlertCircle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
           <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;