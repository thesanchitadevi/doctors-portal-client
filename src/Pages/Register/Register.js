import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateDisplayName } = useContext(authContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('');


    const handleRegister = data => {
        console.log(data);
        setError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully User Created!');
                updateDisplayName(data.name)
                    .then(() => { })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    return (
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8  text-gray-700">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
            <p className="text-sm text-center text-gray-400">Already have account?
                <Link to="/register" className="focus:underline hover:underline"> Login here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button ariaLabel="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>
                <button ariaLabel="Login with GitHub" rtype="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <p>Login with GitHub</p>
                </button>

            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-400" />
                <p className="px-3 text-gray-400">OR</p>
                <hr className="w-full text-gray-400" />
            </div>
            <form onSubmit={handleSubmit(handleRegister)} >
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

                        {errors.name && <p className='text-red-700'>{errors.name.message}</p>}

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
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })}
                            className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-700 focus:border-cyan-400" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    </div>

                </div>
                {error && <p className='text-red-600'>{error}</p>}
                <input className='btn btn-accent w-full px-8 py-3 mt-5 font-semibold rounded-md bg-cyan-400 text-gray-100 cursor-pointer' value="Register" type="submit" />

            </form>
        </div>
    );
};

export default Register;