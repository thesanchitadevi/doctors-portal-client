import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { format } from 'date-fns';
import React, { useState } from 'react';

const BookingModal = ({ treatment, setOpenModal, selectedDate }) => {
    const { name,slots } = treatment;
    const date = format(selectedDate, 'PP');


    const [slot, setSlot] = useState('');

    const handleChange = (event) => {
        setSlot(event.target.value);
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
                            
                            <div className="mt-2 text-center  sm:text-left">
                                <h4 className="text-xl font-medium text-gray-800">
                                    {name}
                                </h4>
                                <form className='mt-10 flex flex-col justify-center'>
                                    <TextField className='py-5' id="standard-basic" label="Date" variant="standard" value={date} disabled /> <br />
                                    
                                    <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={slot}
                                        label="Slot"
                                        onChange={handleChange}
                                    >
                                        {
                                            slots.map(
                                                slot => <MenuItem value={slot}>{slot}</MenuItem>
                                            )
                                            
                                        }
                                        
                                    </Select>

                                    <br />
                                    <TextField className='py-5' id="standard-basic" label="Standard" variant="standard" />
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                       Submit
                                    </button>
                                </div>
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