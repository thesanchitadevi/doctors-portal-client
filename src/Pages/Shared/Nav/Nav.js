import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider/AuthProvider";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);
    const { user, providerSignOut } = useContext(authContext);

    const handleLogout = event => {
        providerSignOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const menu = <>
        {user?.uid ?
            <button onClick={handleLogout}
                className="inline-block space-x-5 w-full px-10 text-center text-blue-900 "
            >
                Logout
            </button>
            :
            <Link
                to="/login"
                className="inline-block space-x-5 w-full px-10 text-center text-blue-900 "
            >
                Login
            </Link>
        }

    </>

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-cyan-500">Doctors-portal</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-900"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/">About</Link>
                            </li>
                            <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/appointment">Appointment</Link>
                            </li>
                            {
                                user?.uid &&
                                <li className="text-blue-900 hover:text-blue-600">
                                <Link to="/dashboard">Dashboard</Link>
                                </li>
                            }
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            {menu}
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {menu}
                </div>
            </div>
        </nav>
    );
}