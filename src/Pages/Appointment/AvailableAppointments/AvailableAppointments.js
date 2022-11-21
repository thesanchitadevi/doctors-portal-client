import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='my-10'>
            <h1 className='text-xl font-bold text-center text-cyan-500'>Available Appointments on {format(selectedDate, 'PP')}</h1>
        </section>
    );
};

export default AvailableAppointments;