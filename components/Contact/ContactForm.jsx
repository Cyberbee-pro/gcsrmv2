import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINTS } from '@/utils/config';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "email") {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Frontend validation before sending
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            toast.error("Name must be at least 2 characters long.", {
                position: "top-center",
                autoClose: 5000,
                theme: "colored"
            });
            return;
        }

        if (!formData.email.trim()) {
            toast.error("Email is required.", {
                position: "top-center",
                autoClose: 5000,
                theme: "colored"
            });
            return;
        }

        if (emailError) {
            toast.error("Please enter a valid email address.", {
                position: "top-center",
                autoClose: 5000,
                theme: "colored"
            });
            return;
        }

        if (!formData.message.trim() || formData.message.trim().length < 10) {
            toast.error("Message must be at least 10 characters long.", {
                position: "top-center",
                autoClose: 5000,
                theme: "colored"
            });
            return;
        }

        if (formData.message.trim().length > 2000) {
            toast.error("Message must be less than 2000 characters.", {
                position: "top-center",
                autoClose: 5000,
                theme: "colored"
            });
            return;
        }

        setIsSubmitting(true);

        // Log the data being sent for debugging
        console.log("📤 Sending form data:", {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            lengths: {
                name: formData.name.trim().length,
                email: formData.email.trim().length,
                message: formData.message.trim().length
            }
        });

        axios
            .post(API_ENDPOINTS.CONTACT.SEND_MESSAGE, {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            })
            .then((response) => {
                console.log("✅ Response:", response.data);
                toast.success(response.data.message || "Your form has been submitted successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error("Error:", error);

                // Get specific error message from API response
                let errorMessage = "There was an error submitting your form. Please try again.";

                if (error.response && error.response.data) {
                    errorMessage = error.response.data.message || errorMessage;
                    console.log("API Error Details:", error.response.data);
                }

                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
                setIsSubmitting(false);
            });
    };

    const isFormValid = () => {
        return (
            formData.name.trim().length >= 2 &&
            formData.name.trim().length <= 100 &&
            formData.email.trim() &&
            !emailError &&
            formData.message.trim().length >= 10 &&
            formData.message.trim().length <= 2000
        );
    };

    return (
        <>
            <div>
                <div className="main1 py-6 lg:py-20 sm:py-10">
                    <div
                        className="Qform bg-bg_black text-white flex flex-col shadow-lg 
             hover:shadow-[0_0_30px_10px_rgba(13,255,78,1)] border-[1px] border-bright_green mx-10 rounded-2xl p-4
             lg:my-10 lg:mx-60 lg:border-2 lg:border-bright_green lg:rounded-2xl lg:p-8
             sm:mx-32 sm:border-[1px] sm:border-bright_green sm:rounded-2xl sm:p-6
             mb-20 transition-shadow duration-300 ease-in-out"

                    >
                        <p
                            className="text-white text-2xl md:text-4xl font-bold text-center mt-3 font-poppins 
              lg:text-4xl  lg:font-bold  lg:mt-8  lg:ml-8 "
                        >
                            Send Us Your Queries
                        </p>
                        <div className="w-[90%] sm:w-[70%] mx-auto">
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`border-b-2 ${formData.name.length > 0 && formData.name.length < 2 ? 'border-red-500' : 'border-gray'} text-white font-dmSans bg-bg_black outline-none w-full my-8 mt-10`}
                            />
                            {formData.name.length > 0 && formData.name.length < 2 && (
                                <p className="text-red-500 text-sm -mt-6 mb-4">Name must be at least 2 characters</p>
                            )}
                            <div className="text-right text-gray-400 text-xs -mt-6 mb-2">
                                {formData.name.length}/100
                            </div>
                        </div>

                        <div className="w-[90%] sm:w-[70%] mx-auto">
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`border-b-2 ${emailError ? 'border-red-500' : 'border-gray'} text-white font-dmSans bg-bg_black outline-none w-full my-8`}
                            />
                            {emailError && (
                                <p className="text-red-500 text-sm -mt-6 mb-4">{emailError}</p>
                            )}
                        </div>

                        <div className="w-[90%] sm:w-[70%] mx-auto">
                            <textarea
                                required
                                name="message"
                                placeholder="Enter Your Query (minimum 10 characters)"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`border-b-2 ${formData.message.length > 0 && formData.message.length < 10 ? 'border-red-500' : 'border-gray'} text-white font-dmSans bg-bg_black outline-none w-full my-8 resize-none`}
                            />
                            {formData.message.length > 0 && formData.message.length < 10 && (
                                <p className="text-red-500 text-sm -mt-6 mb-2">Message must be at least 10 characters</p>
                            )}
                            {formData.message.length > 2000 && (
                                <p className="text-red-500 text-sm -mt-6 mb-2">Message must be less than 2000 characters</p>
                            )}
                            <div className="text-right text-gray-400 text-xs -mt-6 mb-4">
                                <span className={formData.message.length > 2000 ? 'text-red-500' : ''}>
                                    {formData.message.length}/2000
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={!isFormValid() || isSubmitting}
                            className={`text-black bg-bright_green font-dmSans font-bold text-md md:text-lg rounded-full py-3 md:py-4 px-4 w-[40%] my-6 mx-auto transition-opacity ${!isFormValid() || isSubmitting
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-opacity-90"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
