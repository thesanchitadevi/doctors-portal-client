import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setOpenModal, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(authContext);


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: patientName,
            email,
            slot,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
                
            })
        console.log(booking);
    };

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 ">

                            <div className="my-2 text-center  sm:text-left">
                                <div className='flex justify-between'>
                                    <h4 className="text-xl font-medium text-gray-800">
                                        {treatmentName}
                                    </h4>
                                    <input onClick={() => setOpenModal(false)} type="button" value="x" className='font-semibold text-2xl border px-1' />
                                </div>

                                <form onSubmit={handleBooking} className='mt-5'>
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Date
                                    </label>
                                    <input name='date' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Date" value={date} disabled /> <br />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Slot
                                    </label>
                                    <div className="relative">
                                        <select name='slot' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">

                                            {
                                                slots.map((slot, i) =>
                                                    <option
                                                        value={slot}
                                                        key={i}
                                                    >{slot}</option>)
                                            }

                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>

                                    <br />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input name='patientName' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" defaultValue={user?.displayName} disabled />
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Email
                                    </label>
                                    <input name='email' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-cyan-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email" defaultValue={user?.email} disabled />

                                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;