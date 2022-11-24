import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-10" >
                <div className="w-16 h-16 border-b-2 border-slate-600 rounded-full animate-spin"></div>
            </div >
        </>
    );
};

export default Loading;