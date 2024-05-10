import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [placesToReach, setPlacesToReach] = useState('');
    const [bestTimesToReach, setBestTimesToReach] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name) {
            setNameError('Name is required');
            return;
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('Email is required');
            return;
        } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        } else {
            setEmailError('');
        }

        if (!message) {
            setMessageError('Message is required');
            return;
        } else {
            setMessageError('');
        }

        // Create a data object with the form values
        const formData = {
            name,
            email,
            message,
            placesToReach,
            bestTimesToReach,
        };

        try {
            // Make a POST request to your backend or serverless function
            const response = await fetch('https://your-backend-url/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful form submission
                console.log('Form submitted successfully!');
                // Reset form fields after submission
                setName('');
                setEmail('');
                setMessage('');
                setPlacesToReach('');
                setBestTimesToReach('');
            } else {
                // Handle errors if the request was not successful
                console.error('Error submitting form:', response.statusText);
            }
        } catch (error) {
            // Handle network or server errors
            console.error('Error submitting form:', error);
        }
    };

    // Function to validate email format
    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error">{nameError}</span>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error">{emailError}</span>}

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <span className="error">{messageError}</span>}

            <label htmlFor="placesToReach">Places to Reach:</label>
            <input
                type="text"
                id="placesToReach"
                value={placesToReach}
                onChange={(e) => setPlacesToReach(e.target.value)}
            />

            <label htmlFor="bestTimesToReach">Best Times to Reach:</label>
            <input
                type="text"
                id="bestTimesToReach"
                value={bestTimesToReach}
                onChange={(e) => setBestTimesToReach(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
