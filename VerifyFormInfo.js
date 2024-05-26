import toast from "react-hot-toast";

export const VerifyFormInfo = ({ firstName, lastName, username, email, password, phone, country, city, pan, aadhar }) => {
    if (!firstName || !lastName || !username || !email || !password || !phone || !country || !city || !pan || !aadhar) {
        toast.error("Please fill in all the fields");
        return false;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Please fill a proper email address");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be atleast 6 character long");
        return false;
    }

    if(((country === "India") && (phone.slice(0, 3) !== '+91')) || ((country === "USA") && (phone.slice(0, 2) !== '+1')) || ((country === "UK") && (phone.slice(0, 3) !== '+44'))) {
        toast.error("Please fill the correct country code in phone");
        return false;
    }

    const phoneRegex = /^\+\d{1,3}\s\d{7,}$/;
    if(!phoneRegex.test(phone)) {
        toast.error("Please provide a valid phone number");
        return false;
    }

    if(pan.length !== 10) {
        toast.error("PAN no must be 10 characters long");
        return false;
    }

    if(aadhar.length !== 12) {
        toast.error("Aadhar no must be 12 characters long");
        return false;
    }

    return true;
}