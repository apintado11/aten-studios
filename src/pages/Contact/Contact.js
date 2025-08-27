import React, { useState } from 'react';
import Button from '../../components/common/Button';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="contact-page">
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-custom-primary mb-8 text-center">Get in Touch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-custom-primary">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-custom-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <span className="text-custom-primary">ap@atenstd.com</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-custom-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <span className="text-custom-primary">Lake Hopatcong, NJ</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                                    required
                                ></textarea>
                                <Button type="submit" variant="primary" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;