import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError()
    return (
        <div>
            <p className='text-3xl font-bold text-center text-red-500'>Something went wrong</p>
            <p className='text-xl font-semibold text-center text-red-700'>
                {error.statusText || error.message}
            </p>
            <Link to='/' className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
        </div>
    );
};

export default DisplayError;