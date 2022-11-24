import React from 'react';

const MyAppointment = () => {
    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>My Appointments</h1>
            </div>
            <div class="rounded-lg border border-gray-200 w-full ">
                <table class="w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    ID
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Name
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Email
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Amount
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                #00001
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                John Frusciante
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
                            <td class="whitespace-nowrap px-4 py-2">
                                <strong
                                    class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                                >
                                    Cancelled
                                </strong>
                            </td>
                        </tr>

                        <tr>
                            
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                #00002
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                George Harrison
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                george@beatles.com
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">$128.99</td>
                            <td class="whitespace-nowrap px-4 py-2">
                                <strong
                                    class="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700"
                                >
                                    Paid
                                </strong>
                            </td>
                        </tr>

                        <tr>
                           
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                #00003
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Dave Gilmour</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                dave@pinkfloyd.com
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">$459.43</td>
                            <td class="whitespace-nowrap px-4 py-2">
                                <strong
                                    class="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700"
                                >
                                    Partially Refunded
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
    );
};

export default MyAppointment;