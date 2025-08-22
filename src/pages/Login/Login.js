import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const Login = () => {
    const [formData, setFormData] = useState({
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
            console.log('Login submitted:', formData);
            setIsLoading(false);
            // Handle successful login
            navigate('/');
        }, 1000);
    };

    return (
        <div className="login-page">
            <section className="py-16 px-6">
                <div className="max-w-md mx-auto bg-custom-card rounded-lg shadow-lg p-8 border border-custom">
                    <h1 className="text-2xl font-bold text-center mb-6 text-custom-primary">Welcome Back</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            Sign In
                        </Button>
                    </form>
                    <p className="text-center text-custom-secondary mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Login;