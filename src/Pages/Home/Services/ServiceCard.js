import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="flex flex-col justify-center max-w-md p-8 sm:flex sm:space-x-6">
            <img src={img} alt="" className="w-32 h-32 mx-auto " />
            <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-4 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                    <p className="px-5 text-xs sm:text-base text-gray-400">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;