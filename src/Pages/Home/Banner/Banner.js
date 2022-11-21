import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Your New Smile Starts Here</h1>
                    <p className="mt-2  text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                    
                </div>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src={chair} alt="----"/>
            </div>
        </div>
    );
};

export default Banner;