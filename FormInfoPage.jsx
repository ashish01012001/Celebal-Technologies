import React, { useState, useEffect } from 'react'
import { VerifyFormInfo } from '../helperFunction/VerifyFormInfo';
import { useNavigate } from 'react-router-dom';


const FormInfoPage = () => {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        pan: '',
        aadhar: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [isFormComplete, setIsFormComplete] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const allFieldsFilled = Object.values(inputs).every(input => input.trim() !== '');
        setIsFormComplete(allFieldsFilled);
    }, [inputs]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isFormComplete) {
            const validate = VerifyFormInfo(inputs);
            if (validate) {
                console.log("Form submitted successfully");
                navigate("/details", { state: { inputs } });
            } else {
                console.log("Fill the details correctly");
            }
        } else {
            console.log("Fill in all the details");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto my-10'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    FORM
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname" className="label p-2">
                            <span className="text-base label-test">First Name</span>
                        </label>
                        <input type="text" placeholder='e.g. Jack' className="w-full input input-bordered h-10"
                            id='firstname'
                            value={inputs.firstName}
                            onChange={(evt) => setInputs({ ...inputs, firstName: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname" className="label p-2">
                            <span className="text-base label-test">Last Name</span>
                        </label>
                        <input type="text" placeholder='e.g. Ryan' className="w-full input input-bordered h-10"
                            id='lastname'
                            value={inputs.lastName}
                            onChange={(evt) => setInputs({ ...inputs, lastName: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base label-test">Username</span>
                        </label>
                        <input type="text" placeholder='e.g. ryan@jack1234' className="w-full input input-bordered h-10"
                            id='username'
                            value={inputs.username}
                            onChange={(evt) => setInputs({ ...inputs, username: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="label p-2">
                            <span className="text-base label-test">Email</span>
                        </label>
                        <input type="email" placeholder='e.g. ryan1234jack@gmail.com' className="w-full input input-bordered h-10"
                            id='email'
                            value={inputs.email}
                            onChange={(evt) => setInputs({ ...inputs, email: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-test">Password</span>
                        </label>
                        <span className='flex justify-normal'>
                            <input type={showPassword ? "text" : "password"} placeholder='password' className="w-full input input-bordered h-10"
                                id='password'
                                value={inputs.password}
                                onChange={(evt) => setInputs({ ...inputs, password: evt.target.value })}
                            />
                            <button className='bg-black p-2 border-solid' onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
                        </span>
                    </div>

                    <div>
                        <label htmlFor="phone" className="label p-2">
                            <span className="text-base label-test">Phone</span>
                        </label>
                        <input type="tel" placeholder='+91 7234567832' className="w-full input input-bordered h-10"
                            id='phone'
                            value={inputs.phone}
                            onChange={(evt) => setInputs({ ...inputs, phone: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="country" className="label p-2">
                            <span className="text-base label-test">Country</span>
                        </label>
                        <select className='w-full input input-bordered h-10'
                            id='country'
                            value={inputs.country}
                            onChange={(evt) => setInputs({ ...inputs, country: evt.target.value })}
                        >
                            <option value="">--Please select country--</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="city" className="label p-2">
                            <span className="text-base label-test">City</span>
                        </label>
                        <select className='w-full input input-bordered h-10'
                            id='city'
                            value={inputs.city}
                            onChange={(evt) => setInputs({ ...inputs, city: evt.target.value })}
                        >
                            <option value="">--Please select city--</option>
                            {inputs.country == "India" && (
                                <>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="New Delhi">New Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </>
                            )}
                            {inputs.country == "USA" && (
                                <>
                                    <option value="New York">New York</option>
                                    <option value="Austin">Austin</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Washington DC">Washington DC</option>
                                </>
                            )}
                            {inputs.country == "UK" && (
                                <>
                                    <option value="London">London</option>
                                    <option value="Manchester">Manchester</option>
                                    <option value="Birmingham">Birmingham</option>
                                    <option value="Brighton">Brighton</option>
                                    <option value="Bristol">Bristol</option>
                                </>
                            )}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="pan" className="label p-2">
                            <span className="text-base label-test">PAN No.</span>
                        </label>
                        <input type="text" placeholder="Your Pan no" className="w-full input input-bordered h-10"
                            id='pan'
                            value={inputs.pan}
                            onChange={(evt) => setInputs({ ...inputs, pan: evt.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="aadhar" className="label p-2">
                            <span className="text-base label-test">Aadhar No.</span>
                        </label>
                        <input type="text" placeholder="Your Aadhar no" className="w-full input input-bordered h-10"
                            id='aadhar'
                            value={inputs.aadhar}
                            onChange={(evt) => setInputs({ ...inputs, aadhar: evt.target.value })}
                        />
                    </div>

                    <div>
                        <button className="btn btn-block btn-sm mt-4 cursor-pointer"
                            disabled={!isFormComplete}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormInfoPage
