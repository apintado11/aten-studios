import React from 'react';


const FeatureList = ({ features }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-custom-primary mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-custom-secondary">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureList;