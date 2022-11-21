import React from 'react';

const InfoCard = ({ data }) => {
    const { name, description, icon, bgClass } = data;
    return (
        <div className={`max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100 rounded-md ${bgClass}`}>
            <div>
                <img src={icon} alt="" className="object-cover object-center rounded" />
            </div>
            <div className="flex flex-col space-y-4 pt-3">
                <div>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <span className="text-sm text-white">{ description}</span>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;