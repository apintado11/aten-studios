import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Signup submitted:', formData);
            setIsLoading(false);
            // Handle successful signup
            navigate('/');
        }, 1000);
    };

    return (
        <div className="signup-page">
            <section className="py-16 px-6">
                <div className="max-w-md mx-auto bg-custom-card rounded-lg shadow-lg p-8 border border-custom">
                    <h1 className="text-2xl font-bold text-center mb-6 text-custom-primary">Create Account</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-card text-custom-primary"
                            required
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            loading={isLoading}
                        >
                            Create Account
                        </Button>
                    </form>
                    <p className="text-center text-custom-secondary mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Signup;