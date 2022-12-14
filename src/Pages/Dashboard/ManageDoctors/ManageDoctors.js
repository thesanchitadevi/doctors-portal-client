import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { data: doctors, isLoading,refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount >0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} Deleted successfully.`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>Mange Doctors : {doctors?.length}</h1>
            </div>
            <div className="rounded-lg border border-gray-200 w-full ">
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Avater</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Specialty</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {
                            doctors.length &&
                            doctors?.map((doctor, i) =>
                                <>
                                    <tr className=" border border-grey-500 md:border-none block md:table-row">
                                        <th className=" p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">{i + 1}</th>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Avater</span><img src={doctor.image} alt="" srcset="" className='w-8 h-8 rounded-full' /></td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{doctor.name}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>{doctor.email}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>{doctor.specialty}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                            <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-2">Edit</button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setDeletingDoctor(doctor)

                                                }}
                                            >
                                                Delete

                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )

                        }
                    </tbody>
                </table>
            </div>
            {
                showModal && deletingDoctor && <ConfirmationModal
                    setOpenModal={setShowModal}
                    title={`Are you sure you want to delete?`}
                    message={`Mr./Ms./Mrs. ${deletingDoctor.name} , once you delete information you can not recover them.`}
                    handleDeleteDoctor={handleDeleteDoctor}
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;