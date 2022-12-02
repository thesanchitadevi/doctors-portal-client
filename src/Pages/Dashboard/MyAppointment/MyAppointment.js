import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(authContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

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
                                    Treatment
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Date
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Time
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
                        {
                            bookings.length &&
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {i + 1}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {booking.patient}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{booking.email}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{booking.treatment}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{booking.appointmentDate}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{booking.slot}</td>
                                    <td class="whitespace-nowrap px-4 py-2">
                                        <strong
                                            class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                                        >
                                            Cancelled
                                        </strong>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;