import React, { useContext } from 'react';
import { authContext } from '../../../../Context/AuthProvider/AuthProvider';

const Payment = () => {
    const { user } = useContext(authContext);

    return (
        <>
            <div className='flex flex-col  items-center w-full'>
                <div>
                    <h1 className='text-2xl font-semibold m-5'>Checkout</h1>
                </div>
                <div class=" bg-gray-50 border border-slate-300 rounded-md shadow-lg">
                    <div class="py-10 bg-white md:py-10">
                        <div class="max-w-lg px-4 mx-auto lg:px-8">
                            <form class="grid grid-cols-6 gap-4">
                                <div class="col-span-3">
                                    <label
                                        for="FirstName"
                                        class="block text-xs font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        class="w-full my-2 px-2 py-2 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="Email" class="block text-xs font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        class="w-full  border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="Phone" class="block text-xs font-medium text-gray-700">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        id="Phone"
                                        class="w-full  border-gray-200 rounded-md my-2 px-2 py-2 shadow-sm sm:text-sm"
                                    />
                                </div>

                                <fieldset class="col-span-6">
                                    <legend class="block text-sm font-medium text-gray-700">
                                        Card Details
                                    </legend>

                                    <div class=" -space-y-px bg-white rounded-md shadow-sm">
                                        <div>
                                            <label for="CardNumber" class="sr-only"> Card Number </label>

                                            <input
                                                type="text"
                                                id="CardNumber"
                                                placeholder="Card Number"
                                                class="relative w-full my-2 px-2 py-2 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                                            />
                                        </div>

                                        
                                    </div>
                                </fieldset>

                                <fieldset class="col-span-6">
                                    <legend class="block text-sm font-medium text-gray-700">
                                        Billing Address
                                    </legend>

                                    <div class=" -space-y-px bg-white rounded-md shadow-sm">
                                        <div>
                                            <label for="Country" class="sr-only">Country</label>

                                            <select
                                                id="Country"
                                                class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm my-2 px-2 py-2"
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
                                            <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>

                                            <input
                                                type="text"
                                                id="PostalCode"
                                                placeholder="ZIP/Post Code"
                                                class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm my-2 px-2 py-2"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="col-span-6">
                                    <button
                                        class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
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