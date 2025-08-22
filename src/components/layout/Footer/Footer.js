import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-custom-primary border-t border-custom py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-custom-primary mb-4">ATEN</h3>
                        <p className="text-custom-secondary">Digital tools for the modern creator.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-custom-primary mb-4">Product</h4>
                        <ul className="space-y-2 text-custom-secondary">
                            <li>
                                <Link to="/" className="hover:text-custom-primary transition-colors">
                                    All Tools
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-custom-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-custom-primary transition-colors">
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-custom-primary mb-4">Company</h4>
                        <ul className="space-y-2 text-custom-secondary">
                            <li>
                                <Link to="/about" className="hover:text-custom-primary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-custom-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-custom-primary transition-colors">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-custom-primary mb-4">Support</h4>
                        <ul className="space-y-2 text-custom-secondary">
                            <li>
                                <a href="#" className="hover:text-custom-primary transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-custom-primary transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-custom-primary transition-colors">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-custom mt-8 pt-8 text-center text-custom-secondary">
                    <p>&copy; 2024 ATEN Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;