import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

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
            {showModal && <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setOpenModal={setShowModal}
            />}
        </section>
    );
};

export default AvailableAppointments;