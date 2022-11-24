import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Congratulation for being an admin');
                    refetch();
                }
            })
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>All Users</h1>
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
                                    Admin
                                </div>
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div class="flex items-center gap-2">
                                    Status
                                </div>
                            </th>

                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {i + 1}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {user.name}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {
                                            user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)}>
                                                <strong
                                                    class="rounded bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700"
                                                >
                                                    Make Admin
                                                </strong>
                                            </button>
                                        }
                                    </td>

                                    <td class="whitespace-nowrap px-4 py-2">
                                        <button>
                                            <strong
                                                class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                                            >
                                                Cancelled
                                            </strong>
                                        </button>
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

export default AllUsers;