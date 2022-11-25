import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddDoctor = (data) => {
        // console.log(data);
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    //save the doctors information to database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added as a doctor`);
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })


    /* drop down */
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col  items-center w-full'>
            <div>
                <h1 className='text-2xl font-semibold m-10'>Add New Doctor</h1>
            </div>
            <div class="rounded-lg border border-gray-200 w-1/3 ">
                <form onSubmit={handleSubmit(handleAddDoctor)} >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="name"
                                {...register("name",
                                    {
                                        required: "Name is Required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-cyan-400" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input
                                type="email" name="email" id="email" placeholder="email"
                                {...register("email",
                                    {
                                        required: "Email Address is required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-cyan-400" />
                            {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm pb-5">Specialty</label>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 400 }}>
                                        <InputLabel id="demo-simple-select-autowidth-label">Choose </InputLabel>
                                        <Select {...register("specialty")}
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            value={age}
                                            onChange={handleChange}
                                            autoWidth
                                            label="Age"
                                        >

                                            {
                                                specialties?.map(specialty =>
                                                    <MenuItem
                                                        key={specialty._id}
                                                        value={specialty.name}>
                                                        {specialty.name}
                                                    </MenuItem>
                                                )
                                            }


                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="img" className="block text-sm">Image</label>
                            <input type="file" name="img" id="img" placeholder="name"
                                {...register("img",
                                    {
                                        required: "Image is Required"
                                    }
                                )}
                                className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-cyan-400" />
                        </div>
                    </div>
                    <input className='btn btn-accent w-full px-8 py-3 mt-5 font-semibold rounded-md bg-cyan-400 text-gray-100 cursor-pointer' value="Add Doctor" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;