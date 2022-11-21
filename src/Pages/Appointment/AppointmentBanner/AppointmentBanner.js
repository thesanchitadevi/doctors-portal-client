import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section className="p-6 text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 grid-cols-1 sm:grid-col-reverse">
                <div className="flex flex-col justify-center items-center rounded-md sm:px-12 md:px-16  text-black lg:order-first  order-last">
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                   
                </div>
                <div>
                    <img src={chair} alt="" className="object-cover w-full rounded-md  bg-gray-500" />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;