import { useLocation } from "react-router-dom"


const Details = () => {
    const location = useLocation();
    const { inputs } = location.state || {};

    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto mt-48'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Details Page
                </h1>
                {inputs ? (
                    <div className="mt-4">
                        <p><strong>First Name:</strong> {inputs.firstName}</p>
                        <p><strong>Last Name:</strong> {inputs.lastName}</p>
                        <p><strong>Username:</strong> {inputs.username}</p>
                        <p><strong>Email:</strong> {inputs.email}</p>
                        <p><strong>Phone:</strong> {inputs.phone}</p>
                        <p><strong>Country:</strong> {inputs.country}</p>
                        <p><strong>City:</strong> {inputs.city}</p>
                        <p><strong>PAN:</strong> {inputs.pan}</p>
                        <p><strong>Aadhar:</strong> {inputs.aadhar}</p>
                    </div>
                ) : (
                    <p>No details available</p>
                )}
            </div>
        </div>
    )
}

export default Details
