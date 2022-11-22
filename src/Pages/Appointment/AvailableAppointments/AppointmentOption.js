import React, { useState } from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOption = ({ option, setTreatment, treatment, setShowModal }) => {
    const { name, slots } = option;


    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12  text-gray-700">

            <h2 className="text-2xl font-semibold leading-tight tracking-wide">{name}</h2>
            <p className="flex-1 text-center text-gray-600">{slots.length > 0 ? slots[0] : 'All slots booked'}</p>
            <p className="flex-1 text-center text-gray-600">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>

            <button disabled={slots.length === 0}
                className="px-4 py-2 text-purple-100 bg-cyan-600  rounded-md"
                type="button"
                onClick={() => {
                    setShowModal(true);
                    setTreatment(option)
                }}
            >
                Book appointment
            </button>



        </div>
    );
};

export default AppointmentOption;