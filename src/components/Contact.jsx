import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper'; // Assuming this path is correct

const Contact = () => {
    // The target phone number for messages
    const phoneNumber = '919306098396'; // Indian number, no leading '+' as whatsapp link adds it.

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState(''); // State for displaying feedback

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendMessage = (type) => {
        const { name, email, message } = formData;

        // Construct the message content
        const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage);

        let url = '';
        if (type === 'whatsapp') {
            // WhatsApp URL format: https://wa.me/phonenumber?text=urlencodedtext
            url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        } else if (type === 'sms') {
            // SMS URL format: sms:phonenumber?body=urlencodedtext
            url = `sms:${phoneNumber}?body=${encodedMessage}`;
        }

        if (url) {
            // Open the URL in a new tab. The user will complete the sending from there.
            window.open(url, '_blank');
            setSubmissionStatus('Message prepared! Please complete sending in the new window.');
            // Optionally clear the form after opening the link
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSubmissionStatus('Error: Could not prepare message link.');
        }

        // Clear status after a few seconds
        setTimeout(() => {
            setSubmissionStatus('');
        }, 5000);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Since we have separate buttons, this submit won't do anything by itself now.
        // It's good practice to keep it, but the send logic is in handleSendMessage.
    };

    return (
        <SectionWrapper id="contact" className="bg-light-gray" animationClass="animate-slide-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">Get in Touch</h2>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-secondary-dark mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue outline-none"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-secondary-dark mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue outline-none"
                            placeholder="your@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-secondary-dark mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-blue focus:border-primary-blue outline-none resize-y"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </div>

                    {/* Buttons for sending via WhatsApp or SMS */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            type="button" // Use type="button" to prevent default form submission
                            onClick={() => handleSendMessage('whatsapp')}
                            className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md"
                            disabled={!formData.name || !formData.email || !formData.message} // Disable if form is empty
                        >
                            <i className="fab fa-whatsapp"></i> Send via WhatsApp
                        </button>
                        <button
                            type="button" // Use type="button" to prevent default form submission
                            onClick={() => handleSendMessage('sms')}
                            className="flex items-center justify-center gap-2 bg-gray-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-md"
                            disabled={!formData.name || !formData.email || !formData.message} // Disable if form is empty
                        >
                            <i className="fas fa-sms"></i> Send via SMS
                        </button>
                    </div>

                    {/* Submission status message */}
                    {submissionStatus && (
                        <p className="text-center mt-4 text-sm text-gray-700 animate-fade-in">
                            {submissionStatus}
                        </p>
                    )}
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
