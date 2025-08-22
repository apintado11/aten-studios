import React from 'react';

const About = () => {
    const features = [
        {
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            title: "Fast & Efficient",
            description: "Get professional results in minutes, not hours.",
            bgColor: "bg-blue-100"
        },
        {
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Professional Quality",
            description: "Enterprise-grade output for all your projects.",
            bgColor: "bg-green-100"
        },
        {
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            title: "Easy to Use",
            description: "Intuitive interfaces designed for everyone.",
            bgColor: "bg-purple-100"
        }
    ];

    return (
        <div className="about-page">
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-custom-primary mb-8 text-center">
                        About ATEN Studios
                    </h1>
                    <div className="prose prose-lg mx-auto text-custom-secondary">
                        <p className="text-xl mb-6">
                            We believe that great tools should be accessible to everyone. ATEN Studios Digital Lab brings together the essential digital tools that creators, startups, and businesses need to succeed online.
                        </p>
                        <p className="mb-6">
                            Our mission is to democratize professional-grade digital tools, making them simple enough for beginners but powerful enough for professionals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-custom-primary mb-2">{feature.title}</h3>
                                    <p className="text-sm text-custom-secondary">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;