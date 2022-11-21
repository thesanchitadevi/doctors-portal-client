import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className='px-6 py-3 rounded-md my-5 text-white text-xl font-semibold  bg-gradient-to-r from-cyan-500 to-emerald-300'>{children}</button>
    );
};

export default PrimaryButton;