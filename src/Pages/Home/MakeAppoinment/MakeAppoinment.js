import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${appointment})`}}>
            <div className="mx-auto px-6 py-16 lg:mt-40 mb-10 sm:my-10">
                <div className="items-center lg:flex">
                    <div className="flex   items-center justify-center w-full mt-10 lg:mt-0 lg:w-1/2 ">
                        <img className="w-4/8 h-full lg:max-w-2xl -mt-60 -mb-16 lg:block hidden" src={doctor} alt="--" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className='text-xl font-bold text-cyan-500'>Appointment</h1>
                            <h1 className="text-2xl font-semibold text-white lg:text-3xl py-3">Make an appointment Today</h1>

                            <p className="mt-2 text-gray-100 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                            <PrimaryButton>Make A appointment</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;