import { useState, useEffect, useContext } from 'react';
import { baseUrl } from '../api';
import { useLocation, useNavigate } from 'react-router-dom';
// import { LoginContext } from '../App';

export default function Register() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [name,setName]=useState()
    const [indexNumber,setIndexNumber]=useState();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
        setLoggedIn(false);
    }, []);

    function login(e) {
        e.preventDefault();
        const url = baseUrl + 'api/signUp/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name:name,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                setLoggedIn(true);
                navigate(
                    location?.state?.previousUrl
                        ? location.state.previousUrl
                        : '/customers'
                );
            });
    }

    return (
        <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="name">FullName</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">SchoolEmail</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none 
                        border-2 border-gray-200 rounded w-full
                         py-2 px-4 text-gray-700 leading-tight
                          focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="index-number">IndexNumber</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none 
                        border-2 border-gray-200 rounded w-full
                         py-2 px-4 text-gray-700 leading-tight
                          focus:outline-none focus:bg-white focus:border-purple-500"
                        id="index-number"
                        type="number"
                        value={indexNumber}
                        onChange={(e) => {
                            setIndexNumber(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">SchoolEmail</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none 
                        border-2 border-gray-200 rounded w-full
                         py-2 px-4 text-gray-700 leading-tight
                          focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">Gender</label>
                </div>
                <div className="md:w-3/4">
                <select {...props}>
                        <option>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Female</option>
                    </select>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">Programme</label>
                </div>
                <div className="md:w-3/4">
                <select {...props}>
                        <option>Select Programme</option>
                        <option value="BTECH">BTECH</option>
                        <option value="DIPLOMA">DIPLOMA</option>
                        <option value="PDIPLOMA">HND</option>
                    </select>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="course">Course</label>
                </div>
                <div className="md:w-3/4">
                <select {...props}>
                        <option>Select Course</option>
                        <option value="IT">IT</option>
                        <option value="MECH">MECH</option>
                        <option value="ELEC">ELECTRICALS</option>
                        <option value="IT">IT</option>
                        <option value="GDESIGN">GDESIGN</option>
                        <option value="LABTECH">LABTECH</option>
                        <option value="HOSP">HOSPITALITY</option>
                        <option value="ACCOUNTING">ACCOUNTING</option>
                        <option value="PROCUREMENTS">PROCUREMENTS</option>
                    </select>
                </div>
            </div>


    
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="password">Password</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        id="password"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Register
            </button>
        </form>
    );
}