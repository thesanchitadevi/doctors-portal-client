import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();

    return (
        <>
            <div className='flex flex-col  items-center w-full'>
                <div>
                    <h1 className='text-2xl font-semibold m-5'>Checkout of {data.treatment}</h1>
                </div>
                <div className=" bg-gray-50 border border-slate-300 rounded-md shadow-lg">
                    <div className="py-10 bg-white md:py-10">
                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Name
                                    </label>

                                    <input
                                        defaultValue={data.patient}
                                        type="text"
                                        id="FirstName"
                                        className="w-full my-2 px-2 py-2 border border-gray-200 rounded-md shadow-sm sm:text-sm"
                                        disabled
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        defaultValue={data.email}
                                        type="email"
                                        id="Email"
                                        className="w-full border border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                        disabled
                                    />
                                </div>

                                <div className="col-span-6 flex">
                                    <div>
                                        <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                            Price
                                        </label>

                                        <input
                                            defaultValue={data.price}
                                            type="tel"
                                            id="Phone"
                                            className="w-full mr-2 text-left border border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                            Date
                                        </label>

                                        <input
                                            defaultValue={data.appointmentDate}
                                            type="tel"
                                            id="Phone"
                                            className="w-full mx-2 border border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                            Slot
                                        </label>

                                        <input
                                            defaultValue={data.slot}
                                            type="tel"
                                            id="Phone"
                                            className="w-full border mx-2 border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                            disabled
                                        />
                                    </div>
                                </div>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Card Details
                                    </legend>

                                    <div className=" -space-y-px bg-white rounded-md shadow-sm">
                                        <div>
                                            <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                                            <input
                                                type="text"
                                                id="CardNumber"
                                                placeholder="Card Number"
                                                className="relative w-full my-2 px-2 py-2 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                                            />
                                        </div>

                                        
                                    </div>
                                </fieldset>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Billing Address
                                    </legend>

                                    <div className=" -space-y-px bg-white rounded-md shadow-sm">
                                        <div>
                                            <label htmlFor="Country" className="sr-only">Country</label>

                                            <select
                                                id="Country"
                                                className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm my-2 px-2 py-2"
                                            >
                                                <option>England</option>
                                                <option>Wales</option>
                                                <option>Scotland</option>
                                                <option>France</option>
                                                <option>Belgium</option>
                                                <option>Japan</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                                            <input
                                                type="text"
                                                id="PostalCode"
                                                placeholder="ZIP/Post Code"
                                                className="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm my-2 px-2 py-2"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Payment;