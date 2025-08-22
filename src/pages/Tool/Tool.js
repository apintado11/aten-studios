import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TOOLS_DATA } from '../../utils/constants';
import Button from '../../components/common/Button';
import FeatureList from '../../components/tools/FeatureList/FeatureList';
import ToolDemo from '../../components/tools/ToolDemo';


const Tool = () => {
    const { toolId } = useParams();
    const navigate = useNavigate();

    const tool = TOOLS_DATA.find(t => t.id === toolId);

    if (!tool) {
        return (
            <div className="py-16 px-6 text-center">
                <h1 className="text-2xl font-bold text-custom-primary mb-4">Tool Not Found</h1>
                <Button onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </div>
        );
    }

    return (
        <div className="tool-page">
            {/* Tool Hero Section */}
            <section className="py-16 px-6 bg-custom-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`w-20 h-20 rounded-2xl ${tool.iconColor} flex items-center justify-center text-white mx-auto mb-6`}>
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-custom-primary mb-4">
                        {tool.hook}
                    </h1>
                    <p className="text-xl text-custom-secondary">
                        {tool.longDescription}
                    </p>
                </div>
            </section>

            {/* Demo Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-custom-primary mb-8 text-center">
                        See it in action
                    </h2>
                    <div className="bg-custom-card rounded-xl p-8 shadow-sm border border-custom">
                        <ToolDemo toolId={toolId} />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 bg-custom-primary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-custom-primary mb-12 text-center">
                        Why you'll love it
                    </h2>
                    <FeatureList features={tool.features} />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-custom-card rounded-xl p-8 shadow-sm border border-custom">
                        <h2 className="text-2xl font-bold text-custom-primary mb-4">
                            Everything included for $20/month
                        </h2>
                        <p className="text-custom-secondary mb-8">
                            Unlimited access to all tools, features, and exports
                        </p>
                        <Button variant="primary" size="large">
                            {tool.cta}
                        </Button>
                        <p className="text-sm text-custom-secondary mt-4">
                            7-day free trial • Cancel anytime • 30-day money-back guarantee
                        </p>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <div className="py-8 px-6 text-center">
                <button
                    onClick={() => navigate('/')}
                    className="text-blue-500 hover:text-blue-600 font-medium"
                >
                    ← Back to all tools
                </button>
            </div>
        </div>
    );
};

export default Tool;