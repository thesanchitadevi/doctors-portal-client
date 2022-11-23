import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions=[] /* isLoading */ } = useQuery({ //use empty array or isLoading
        queryKey: ['appointmentOptions',date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    /*  
    queryFn: () => fetch('http://localhost:5000/appointmentOptions')
    .then(res => res.json()) 
    */
    /* 
    queryFn: async() => {
        const res = await fetch('http://localhost:5000/appointmentOptions')
        const data = await res.json();
        return data;
        }
    */

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='my-10'>
            <div>
                <h1 className='text-xl font-bold text-center text-cyan-500 mx-3'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 mx-auto w-10/12 my-10'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                            key={option._id}
                            option={option}
                            setTreatment={setTreatment}
                            setShowModal={setShowModal}
                        ></AppointmentOption>

                    )
                }
            </div>
            {showModal && treatment && <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                setOpenModal={setShowModal}
            />}
        </section>
    );
};

export default AvailableAppointments;