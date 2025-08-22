import React from 'react';
import Button from '../../components/common/Button';
import { PRICING } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';


const Pricing = () => {
    const features = [
        'Unlimited access to all tools',
        'Unlimited exports and downloads',
        'Priority customer support',
        'Regular updates and new tools'
    ];

    return (
        <div className="pricing-page">
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-custom-primary mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-custom-secondary mb-12">
                        Everything you need for one low monthly price
                    </p>

                    <div className="bg-custom-card rounded-2xl p-8 shadow-lg border border-custom max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-custom-primary mb-2">
                                All Tools Included
                            </h3>
                            <div className="text-5xl font-bold text-blue-600 mb-2">
                                {formatPrice(PRICING.MONTHLY_PRICE)}
                            </div>
                            <div className="text-custom-secondary">per month</div>
                        </div>

                        <ul className="space-y-4 mb-8 text-left">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-custom-primary">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant="primary"
                            className="w-full py-3 text-lg font-medium mb-4"
                        >
                            Start {PRICING.TRIAL_DAYS}-Day Free Trial
                        </Button>

                        <p className="text-sm text-custom-secondary">
                            Cancel anytime • {PRICING.GUARANTEE_DAYS}-day money-back guarantee
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;