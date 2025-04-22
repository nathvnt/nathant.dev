import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null); 
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const [status, setStatus] = useState(''); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    //recapthca site key 
    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    // regex for form validation
    const namePattern = /^[a-zA-Z\s]{2,30}$/;  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const messagePattern = /^.{10,}$/;  

    // Validation handler
    const validateField = (field, value) => {
        switch (field) {
            case 'name':
                return namePattern.test(value);
            case 'email':
                return emailPattern.test(value);
            case 'message':
                return messagePattern.test(value);
            default:
                return false;
        }
    };

    // On Blur Validation Check
    const handleBlur = (field) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: !validateField(field, eval(field)) 
        }));
    };

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('');           
        setIsSubmitting(true); 

        // Verify reCAPTCHA is completed
        if (!captchaValue) {
            setStatus('Please complete the reCAPTCHA.');
            setIsSubmitting(false);
            return;
        }

        const isValid = ['name', 'email', 'message'].every(field => validateField(field, eval(field)));

        if (isValid) {
            try {
                // Sending form data along with the reCAPTCHA token to the API route
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message, captchaValue }),
                });
    
                if (response.ok) {
                    setStatus('Message sent successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setCaptchaValue(null); // Reset captcha
                } else {
                    setStatus('Failed to send message.');
                }
            } catch (error) {
                console.error(error);
                setStatus('An error occurred while sending the email.');
            }
        } else {
            setStatus('Please fix the errors before submitting.');
        }
        setIsSubmitting(false);
    };

    const formIsValid =
        namePattern.test(name) &&
        emailPattern.test(email) &&
        messagePattern.test(message) &&
        captchaValue !== null;

    return (
        <div className="text-center">
            
            <h2 className="text-2xl lg:text-3xl py-2">
                Feel free to <span className="text-emerald-600">contact</span> me!
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="w-[90%] lg:w-[40%] flex flex-col mx-auto p-2 my-6 rounded-md bg-black bg-opacity-65 border-2 border-emerald-600 text-black shadow-[0_4px_30px_rgba(0,0,0,0.85)]">

                    {/* Name Field */}
                    <label htmlFor="name" className="text-lg text-emerald-600 text-left p-1 ml-[5%] mt-4">
                        Name* {errors.name && <span className="text-red-600">Required</span>}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`p-1 w-[90%] mx-auto mb-6 rounded-md bg-white border ${errors.name ? 'border-red-600' : 'border-gray-400'} text-base outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-600' : 'focus:ring-emerald-600'} shadow-md`}
                        required
                    />

                    {/* Email Field */}
                    <label htmlFor="email" className="text-lg text-emerald-600 text-left p-1 ml-[5%]">
                        Email* {errors.email && <span className="text-red-600">Required</span>}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`p-1 w-[90%] mx-auto mb-6 rounded-md bg-white border ${errors.email ? 'border-red-600' : 'border-gray-400'} text-base outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-600' : 'focus:ring-emerald-600'} shadow-md`}
                        required
                    />

                    {/* Message Field */}
                    <label htmlFor="message" className="text-lg text-emerald-600 text-left p-1 ml-[5%]">
                        Message* {errors.message && <span className="text-red-600">Required</span>}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={`p-1 w-[90%] mx-auto mb-10 h-36 rounded-md bg-white border ${errors.message ? 'border-red-600' : 'border-gray-400'} text-base outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-600' : 'focus:ring-emerald-600'} shadow-md`}
                        required
                    />

                    {/* reCAPTCHA */}
                    <ReCAPTCHA
                        sitekey={SITE_KEY}
                        onChange={handleCaptchaChange}
                        className="mx-auto mb-10"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!formIsValid || isSubmitting}
                        className={`w-[50%] mx-auto mb-6 p-2 rounded-md text-white text-lg border-2 border-black outline-none shadow-md ${
                            !formIsValid || isSubmitting
                                ? 'bg-gray-500 bg-opacity-60 cursor-not-allowed'
                                : 'bg-emerald-600 bg-opacity-70 hover:bg-opacity-100 hover:bg-gradient-to-t hover:from-emerald-900 hover:to-emerald-600 hover:font-semibold'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status message for feedback */}
                    {status && <p className="mb-6 text-emerald-600 text-lg">{status}</p>}

                </div>
            </form>
        </div>
    );
}
