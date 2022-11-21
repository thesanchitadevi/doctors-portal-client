import React from 'react';

const Review = ({ review }) => {

    const { name, img, userReview, location } = review;

    return (
        <section >
            <div className="p-8 border rounded-lg border-gray-400 shadow-lg">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    {userReview}
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={img} alt="" />

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">{name}</h1>
                        <span className="text-sm text-gray-500">{location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;